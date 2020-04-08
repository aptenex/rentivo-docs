const path = require('path');
function srcPath(subdir) {
  return path.join(process.cwd(), subdir);
}

module.exports = {
  resolve: {
    alias: {
      'reusecore': './reusecore',
      'common': './common',
      'functions': './functions',
      'containers' : './containers',
      'components' : './components',
      'constants' : './constants'
    }
  }
};