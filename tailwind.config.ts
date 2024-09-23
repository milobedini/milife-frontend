const tailwindScrollbarPlugin = require('tailwind-scrollbar-hide');
const tailwindThemeConfig = require('./src/styles/tailwind/tailwindThemeConfig');
const tailwindSafeListConfig = require('./src/styles/tailwind/tailwindSafeListConfig');

/** Learn about tailwind theme config here: https://tailwindcss.com/docs/configuration */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [tailwindThemeConfig],
  safelist: tailwindSafeListConfig,
  corePlugins: {
    // We are using a custom "preflight", located at "src/styles/tailwind/_normalizer",
    // this was necessary to fix MUI's and Tailwind's normalizer conflict!
    preflight: false
  },
  plugins: [tailwindScrollbarPlugin]
};
