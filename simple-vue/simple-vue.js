/**
 * A simple Vue implementation
 */

const utils = {
  /**
   * Get value from vm.$data, this will trigger Object.defineProperty getter() function
   */
  getValue(expression, vm) {
    return vm.$data[expression.trim()];
  },
  /**
   * Set value to vm.$data, this will trigger Object.defineProperty setter() function
   */
  setValue(expression, vm, newValue) {
    vm.$data[expression] = newValue;
  },
  /**
   * Update text node
   */
  textUpdate(node, value) {
    node.textContent = value;
  },
  /**
   * Update v-model value
   */
  modelUpdate(node, value) {
    node.value = value;
  },
  /**
   * v-model
   */
  model(node, value, vm) {
    const initValue = this.getValue(value, vm);

    new Watcher(value, vm, (newValue) => {
      this.modelUpdate(node, newValue);
    });

    node.addEventListener('input', (e) => {
      const newValue = e.target.value;
      this.setValue(value, vm, newValue);
    });

    this.modelUpdate(node, initValue);
  },
  /**
   * v-text
   */
  text(node, value, vm) {
    let result;

    if (value.includes('{{')) {
      // {{ xxx }}  
      result = value.replace(/\{\{(.+)\}\}/g, (...args) => {
        const expr = args[1];
        new Watcher(expr, vm, (newVal) => {
          this.textUpdate(node, newVal);
        });
        return this.getValue(args[1], vm);
      })
    } else {
      // v-text="xxx"
      result = this.getValue(value, vm);
    }

    this.textUpdate(node, result);
  },
  /**
   * v-on:click
   */
  on(node, value, vm, eventName) {

  }
};

class Watcher {
  constructor(expression, vm, callback) {
    this.expression = expression;
    this.vm = vm;
    this.callback = callback;
    this.oldValue = this.getOldValue();
  }

  getOldValue() {
    // Assign target to Dependency for global invocation
    Dependency.watcher = this;

    const oldValue = utils.getValue(this.expression, this.vm);
    Dependency.watcher = null;

    return oldValue;
  }

  update() {
    const newValue = utils.getValue(this.expression, this.vm);

    if (newValue !== this.oldValue) {
      this.callback(newValue);
    }
  }
}

class Dependency {
  constructor() {
    this.watchers = [];
  }

  addWatcher(watcher) {
    this.watchers.push(watcher);
  }

  notify() {
    this.watchers.forEach(w => w.update());
  }
}

class Observer {
  constructor(data) {
    this.observe(data);
  }

  observe(data) {
    if (data && typeof data === 'object') {
      Object.keys(data).forEach(key => {
        this.defineReactive(data, key, data[key]);
      });
    }
  }

  defineReactive(obj, key, value) {
    // recursively invoke observe function
    this.observe(value);
    const dependency = new Dependency();

    Object.defineProperty(obj, key, {
      get: () => {
        console.log('$data getter()', key);

        const watcher = Dependency.watcher;
        watcher && dependency.addWatcher(watcher);

        return value;
      },
      set: (newVal) => { // an arrow function needed
        console.log('$data setter()', key, newVal);

        if (value === newVal) {
          return;
        }
        this.observe(newVal);
        value = newVal;

        dependency.notify();
      }
    });
  }
}

class Compiler {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;

    const fragment = this.compileFragment(this.el);
    this.compile(fragment);

    this.el.appendChild(fragment);
  }

  compile(fragment) {
    const childNodes = Array.from(fragment.childNodes); // convert NodeList to element array

    childNodes.forEach(childNode => {
      if (this.isElementNode(childNode)) {
        // element h1 / input - read attributes, check v- directives
        this.compileElement(childNode);
      } else if (this.isTextNode(childNode)) {
        // text node - {{ msg }}
        this.compileText(childNode);
      }

      // DFS(Depth First Search) algorithm
      if (childNode.childNodes && childNode.childNodes.length) {
        this.compile(childNode);
      }
    });
  }

  /**
   * Transform #app and child elements to document fragment
   */
  compileFragment(el) {
    const fragment = document.createDocumentFragment();
    let firstChild;

    // Recursively append child elements
    // Note: fragment appendChild will automatically delete current node after appending
    while (firstChild = el.firstChild) {
      fragment.appendChild(firstChild);
    }

    return fragment;
  }

  compileElement(node) {
    // v-model v-text v-on:click
    // transform attributes to array - after transforming, the result array can invoke forEach, map function etc.
    const attributes = Array.from(node.attributes);

    attributes.forEach(attr => {
      const { name, value } = attr;

      if (this.isDirective(name)) {
        // v-model, v-text, v-bind, v-on:click
        const [, directive] = name.split('-');
        const [compileKey, eventName] = directive.split(':');

        // [key]: handle different directives with utils
        utils[compileKey](node, value, this.vm, eventName);
      }
    });
  }

  compileText(node) {
    // {{ msg }}
    const content = node.textContent;

    if (/\{\{(.+)\}\}/.test(content)) {
      // make v-text directive logic handle mustache( {{ xxx }} ) syntax
      utils['text'](node, content, this.vm);
    }
  }

  /**
   * Check whether current attribute is a directive, similiar to regexp /^v(.+)/
   */
  isDirective(name) {
    return name.startsWith('v-');
  }
  
  /**
   * A dom element has `nodeType` property and its value equals to 1
   */
  isElementNode(el) {
    return el.nodeType === 1;
  }

  /**
   * A text node returns nodeType 3
   */
  isTextNode(el) {
    return el.nodeType === 3;
  }
}

class Vue {
  constructor(options) {
    this.$el      = options.el;
    this.$data    = options.data;
    this.$options = options;

    // 1. trigger data binding between `this.$data.xxx` and vue template
    new Observer(this.$data);

    // 2. handle template update logic, bing data with template
    new Compiler(this.$el, this);

    this.proxyData(this.$data);
  }

  // We can change `this.$data.someData` by `this.someData`,
  // since we have getters and setters defefined with Object.defineProperty()
  proxyData(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return data[key];
        },
        set(newVal) {
          data[key] = newVal;
        }
      });
    });
  }
}