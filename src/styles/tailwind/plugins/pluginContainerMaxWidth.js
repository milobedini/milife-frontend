const map = require('lodash/map');
const plugin = require('tailwindcss/plugin');

/**
 * PluginContainerMaxWidth.
 *
 * This plugin sets the container's max-width to unset under 1440px screen width.
 * From 1440 the max width is 1440 and the content is aligned to the centre.
 */
module.exports = plugin.withOptions(() => ({ addComponents, theme }) => {
  const screens = theme('screens', {});

  const mediaQueries = map(screens, (width) => ({
    [`@media (min-width: ${width})`]: { '.container': { 'max-width': width === '1440px' ? '1440px' : 'unset' } }
  }));

  addComponents([...mediaQueries], { variants: ['responsive'] });
});
