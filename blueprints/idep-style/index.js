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
        { name: '@tailwindcss/ui', target: '0.1.3' },
        { name: 'animate.css', target: '3.7.2' },
        { name: 'autoprefixer', target: '9.7.6' },
        { name: 'postcss-import', target: '12.0.1' },
        { name: 'tailwindcss', target: '1.2.0' },
      ]);
    });
  },
};
