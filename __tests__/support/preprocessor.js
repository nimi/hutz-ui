var babel = require('babel-core');

module.exports = {
  process: function (src, filename) {
    // Allow the stage to be configured by an environment
    // variable, but use Babel's default stage (0) if
    // no environment variable is specified.
    var stage = process.env.BABEL_JEST_STAGE || 0;

    // Ignore all files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    if (filename.indexOf('node_modules') === -1 && babel.util.canCompile(filename)) {
      return babel.transform(src, {
        filename: filename,
        retainLines: true,
        auxiliaryCommentBefore: 'istanbul ignore next',
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-react-display-name', 'transform-decorators', 'transform-es2015-typeof-symbol']
      }).code;
    }

    return src;
  }
};
