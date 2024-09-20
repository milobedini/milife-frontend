import { createTheme, SimplePaletteColorOptions, ThemeOptions } from '@mui/material/styles';
import { ColorPartial } from '@mui/material/styles/createPalette';
import { palette } from 'src/styles/mui/theme/palette';
import { breakpoints } from './breakpoints';
import * as components from './components';
import { typography } from './typography';

/**
 * Extending the theme.
 *
 * Community implementations:
 * https://stackoverflow.com/questions/46486565/mui-customize-button-color
 *
 * Adding new colors:
 * https://mui.com/material-ui/customization/palette/#adding-new-colors
 * https://mui.com/material-ui/customization/color/#picking-colors
 *
 * Adding new variants:
 * https://mui.com/material-ui/customization/theme-components/#creating-new-component-variants
 */

/** Type defs. */
type MuiThemeConfig = typeof muiThemeConfig;

/** Brix theme config */
interface BrixPalette {
  clay: SimplePaletteColorOptions & ColorPartial;
  gold: SimplePaletteColorOptions;
  blue: SimplePaletteColorOptions;
  red: SimplePaletteColorOptions;
  black: SimplePaletteColorOptions;
  white: SimplePaletteColorOptions;
}

interface BrixColorOverrides {
  clay: true;
  gold: true;
  blue: true;
  red: true;
  black: true;
  white: true;
}

/** Mui theme config */
declare module '@mui/material/styles' {
  interface Palette extends BrixPalette {}
  interface PaletteOptions extends BrixPalette {}
}

/** Add all custom theme config here. (This is merged with MUI default theme.) */
const customThemeConfig: ThemeOptions = {
  // We should be adding fitting configs here for Buttons.
  // Removing border radius, maybe even adding new variants.
  // https://mui.com/material-ui/customization/theme-components/
  spacing: 8,
  breakpoints,
  components,
  palette,
  typography
};

const muiThemeConfig = createTheme(customThemeConfig);

/** Exports. */
export { type BrixColorOverrides, type BrixPalette, type MuiThemeConfig, muiThemeConfig };
