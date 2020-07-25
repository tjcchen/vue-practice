import { check } from "../utils/auth";

function install(Vue, options = {}) {
  // Register v-auth directive to global context
  Vue.directive(options.name || "auth", {
    inserted(el, binding) {
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
};

export default { install };