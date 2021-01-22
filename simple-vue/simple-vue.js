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
        console.log('$data get', key, value);
        return value;
      },
      set: (newVal) => { // an arrow function needed
        if (value === newVal) {
          return;
        }
        console.log('$data set', key, newVal);

        this.observe(newVal);
        value = newVal;
      }
    });
  }
}

class Vue {
  constructor(options) {
    this.$el      = options.el;
    this.$data    = options.data;
    this.$options = options;

    // trigger data binding between `this.$data.xxx` and `template`
    new Observer(this.$data);

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