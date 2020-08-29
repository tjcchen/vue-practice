module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  
  // Disable prettier at this time
  // extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  extends: ["plugin:vue/essential", "eslint:recommended"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },

  parserOptions: {
    parser: "babel-eslint"
  },
  
  // overrides: [
  //   {
  //     files: [
  //       "**/__tests__/*.{j,t}s?(x)",
  //       "**/tests/unit/**/*.spec.{j,t}s?(x)"
  //     ],
  //     env: {
  //       jest: true
  //     }
  //   }
  // ]
};
