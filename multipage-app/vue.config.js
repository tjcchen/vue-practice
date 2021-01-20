const HTMLInlineCssWebpackPlugin  = require('html-inline-css-webpack-plugin').default;
const HardSourceWebpackPlugin     = require('hard-source-webpack-plugin');

module.exports = {
  // multipage application entry configuration
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

  // less support & import global stylesheet
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import '@/style/common.less';`
      }
    }
  },

  // working with webpack( simple config )
  configureWebpack: {
    plugins: [
      new HTMLInlineCssWebpackPlugin(), // put css on page directly
      new HardSourceWebpackPlugin() // use cache for build
    ]
  },

  // working with webpack( choose different configs for production and development environments )
  // configureWebpack: config => {
  //   console.log(`---${process.env.NODE_ENV}---`);
  //   console.log(`---${process.env.APP_NAME}---`); // configured in .env file
  //   console.log(`---${process.env.AUTHOR}---`);
  //   if (process.env.NODE_ENV === 'production') {
  //     // mutate config for production
  //   } else {
  //     // mutate config for development
  //   }
  // }

  // we can modify webpack config with chainWebpack option(webpack-chain npm module)
  chainWebpack: config => {
    config.module
          .rule('vue')
          .use('vue-loader')
          .tap(opts => {
            // Todo: modify the options
            // console.log(opts);
            return opts;
          });

    //---------------------------------
    // inline svg with vue-svg-loader
    //---------------------------------
    const svgRule = config.module.rule('svg');
    
    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear();
    
    // add replacement loader(s)
    svgRule.use('vue-svg-loader')
           .loader('vue-svg-loader');    
  }
};
