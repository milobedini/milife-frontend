const map = require('lodash/map');
const plugin = require('tailwindcss/plugin');

/**
 * PluginContainerOffsetSize.
 *
 * This plugin helps to expose the "size" of a centered container's offset amount from the edge of the screen.
 * That number is calculated by subtracting the width of the current container's max-width from the screen's width,
 * then dividing it by 2. If there is default padding set for the container, that will be incorporated as well.
 *
 * className: "container-offset-size"
 * cssVarName: "--container-offset-size"
 *
 * The className/cssVarName name is configurable on the "selector" key in the option object.
 * More info on usage here: https://tailwindcss.com/docs/plugins#exposing-options
 */
module.exports = plugin.withOptions((options) => ({ addComponents, theme }) => {
  const selector = options?.selector || 'container-offset-size';
  const screens = theme('screens', {});
  const containerPadding = theme('container.padding', {});
  const styles = (width) => ({ [`--${selector}`]: `calc((100vw - ${width}) / 2 + ${containerPadding})` });

  const mediaQueries = map(screens, (width) => ({
    [`@media (min-width: ${width})`]: { [`.${selector}`]: styles(width) }
  }));

  addComponents([{ [`.${selector}`]: styles('100vw') }, ...mediaQueries], { variants: ['responsive'] });
});
