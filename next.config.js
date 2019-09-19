const path = require('path');
const sass = require('@zeit/next-sass');
const isBuild = process.env.NODE_ENV === 'production';

module.exports = sass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isBuild ? '[hash:base64:5]' : '[local]-[hash:base64:5]',
  },
  distDir: '../.next',
  assetPrefix: '/',
  webpack(config) {
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about/index': { page: '/about' },
      '/speakers/index': { page: '/speakers' },
      '/schedule/index': { page: '/schedule' },
      '/sponsors/index': { page: '/sponsors' },
      '/facility/index': { page: '/facility' },
    }
  }
});
