## Multipage Application
The main part of Vue multi-page application lies within [vue.config.js](https://github.com/tjcchen/vue-practice/blob/master/multipage-app/vue.config.js), You can configure different page entries via `pages` property. A simple config looks like this:
```js
module.exports = {
  pages: {
    'index': {
      entry: './src/pages/home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index'] // 'chunk-vendors' chunk is necessary
    }
  }
};
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
