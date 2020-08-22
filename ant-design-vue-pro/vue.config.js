/**
 * Webpack configuration
 */
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true  // https://github.com/ant-design/ant-motion/issues/44
      }
    }
  },

  // Add SVG loader
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear()

    // add replacement loader(s)
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },

  // https://webpack.docschina.org/configuration/dev-server/#devserverproxy
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        // Bypass proxy - developers can add code logic to this part of code
        // 1. For browser request, like xxx.html file, we return index.html
        // 2. For API request, like /api/dashboard/chart, we utilize code logic to handle it
        bypass: function(req, res) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request 222.');

            return '/index.html';
          } else if (process.env.MOCK !== 'none' && req.path.indexOf('api') !== -1) {  // apply this part of logic when environment is mock
            const name   = req.path.split("/api/")[1].split("/").join("_");
            const mock   = require(`./mock/${name}`);
            const result = mock(req.method);

            // clear mock api cache, this must be done
            delete require.cache[require.resolve(`./mock/${name}`)];

            return res.send(result);
          }
        }
      }
    }
  }
}