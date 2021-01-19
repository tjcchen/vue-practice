module.exports = {
  pages: {
    'index': {
      entry: './src/pages/home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'list': {
      entry: './src/pages/list/main.js',
      template: 'public/index.html',
      title: 'List',
      chunks: ['chunk-vendors', 'chunk-common', 'list']
    },
    'about': {
      entry: './src/pages/about/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    }
  },

  css: {
    loaderOptions: {
      less: {
        additionalData: `@import '@/style/common.less';`
      }
    }
  }
};
