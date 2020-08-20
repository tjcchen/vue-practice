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
  // https://webpack.docschina.org/configuration/dev-server/#devserverproxy
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        bypass: function(req, res) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.');
            return '/index.html';
          } else {
            const name = req.path.split("/api/")[1].split("/").join("_");
            const mock = require(`./mock/${name}`);
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