'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const { join } = require('path');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          require('postcss-import')({ path: ['node_modules'] }),
          // require('postcss-easings'),
          require('tailwindcss')(
            join(__dirname, 'blueprints', 'idep-style', 'files', 'config', 'tailwind.config.js')
          ),
          require('autoprefixer'),
          //...process.env.EMBER_ENV === 'production' ? [purgecss] : []
        ],
      },
    },

    storeConfigInMeta: false,

    typefaceOptions: {
      disableAuto: true,
      typefaces: ['inter', 'muli', 'public-sans', 'roboto'],
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import({
    development: 'node_modules/animate.css/animate.min.css',
    production: 'node_modules/animate.css/animate.css',
  });

  return app.toTree();
};
