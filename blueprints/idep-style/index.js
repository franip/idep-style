'use strict';

module.exports = {
  description: '',

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall(/*options*/) {
    return this.addAddonsToProject({
      packages: [{ name: 'ember-cli-postcss', target: '6.0.0' }],
    }).then(() => {
      return this.addPackagesToProject([
        { name: '@fullhuman/postcss-purgecss', target: '2.1.2' },
        { name: '@tailwindcss/ui', target: '0.1.3' },
        { name: 'animate.css', target: '3.7.2' },
        { name: 'autoprefixer', target: '9.7.6' },
        { name: 'ember-typeface', target: 'git+https://github.com/franip/ember-typeface.git' },
        { name: 'postcss-import', target: '12.0.1' },
        { name: 'tailwindcss', target: '1.2.0' },
        { name: 'typeface-inter', target: '3.12.0' },
        { name: 'typeface-muli', target: '1.1.3' },
        { name: 'typeface-public-sans', target: '1.1.4' },
        { name: 'typeface-roboto', target: '0.0.75' },
      ]);
    });
  },

  normalizeEntityName() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },
};
