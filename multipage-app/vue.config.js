module.exports = {
  pages: {
    'index': {
      entry: './src/pages/home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'about': {
      entry: './src/pages/about/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    }
  }
};
