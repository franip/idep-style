const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        'inter-var': ['Inter var', ...defaultTheme.fontFamily.sans],
        muli: ['Muli', ...defaultTheme.fontFamily.sans],
        public: ['Public Sans', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      },

      // fontSize: {
      //   xxs: '0.5rem',
      // },

      // spacing: {
      //   '05': '0.125rem', // ~= 2px
      // },
    },
  },
  variants: {
    // borderColor: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
    // cursor: ['responsive', 'hover'],
    // textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('@tailwindcss/ui')],
};
