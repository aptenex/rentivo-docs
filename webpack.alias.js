const path = require('path');
function srcPath(subdir) {
  return path.join(process.cwd(), subdir);
}

module.exports = {
  resolve: {
    alias: {
      'reusecore': srcPath('src/reusecore'),
      'common': srcPath('src/common'),
      'functions': srcPath('src/functions'),
      'containers' : srcPath('src/containers'),
      'components' : srcPath('src/components'),
      'constants' : srcPath('src/constants')
    }
  }
};