/**
 * A simple Vue implementation
 */

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

    Object.defineProperty(obj, key, {
      get: () => {
        return value;
      },
      set: (newVal) => { // an arrow function needed
        if (value === newVal) {
          return;
        }
        this.observe(newVal);
        value = newVal;
      }
    });
  }
}

class Compiler {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);

    const fragment = this.compileFragment(this.el);

    this.compile(fragment);
    // this.el.appendChild(fragment);
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
    // transform attributes to array - after transforming, the result array can invoke forEach, map etc.
    const attributes = Array.from(node.attributes);

    attributes.forEach(attr => {
      const { name, value } = attr;
      
      if (this.isDirective(name)) {
        // v-model, v-text, v-bind, v-on:click
        const [, directive] = name.split('-');
        const [compileKey, eventName] = directive.split(':');

        // TODO: deal with directives
      }
    });
  }

  isDirective(name) {
    return name.startsWith('v-'); // similiar to regexp /^v(.+)/
  }

  compileText(node) {
    // {{ msg }}
    const content = node.textContent;

    if (/\{\{(.+)\}\}/.test(content)) {
      console.log('content: ', content);

      // TODO: deal with text content
    }
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

    // 2. handle template logic, bing data with template
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