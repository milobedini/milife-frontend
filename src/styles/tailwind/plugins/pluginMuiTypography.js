const plugin = require('tailwindcss/plugin');

/**
 * Mui default typography ported as tailwind plugin.
 * Learn about tailwind plugins here: https://tailwindcss.com/docs/plugins
 */
module.exports = plugin(({ addComponents }) => {
  addComponents({
    '.typography-h1': {
      fontFamily: 'var(--font-inter)',
      fontSize: '6rem',
      fontWeight: '300',
      lineHeight: '1.167',
      letterSpacing: '-0.01562em'
    },
    '.typography-h2': {
      fontFamily: 'var(--font-inter)',
      fontSize: '3.75rem',
      fontWeight: '300',
      lineHeight: '1.2',
      letterSpacing: '-0.00833em'
    },
    '.typography-h3': {
      fontFamily: 'var(--font-inter)',
      fontSize: '3rem',
      fontWeight: '400',
      lineHeight: '1.167',
      letterSpacing: '0em'
    },
    '.typography-h4': {
      fontFamily: 'var(--font-inter)',
      fontSize: '2.125rem',
      fontWeight: '400',
      lineHeight: '1.167',
      letterSpacing: '0.00735em'
    },
    '.typography-h5': {
      fontFamily: 'var(--font-inter)',
      fontSize: '1.5rem',
      fontWeight: '400',
      lineHeight: '1.334',
      letterSpacing: '0em'
    },
    '.typography-h6': {
      fontFamily: 'var(--font-inter)',
      fontSize: '1.25rem',
      fontWeight: '500',
      lineHeight: '1.6',
      letterSpacing: '0.0075em'
    },
    '.typography-subtitle-1': {
      fontFamily: 'var(--font-inter)',
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.75',
      letterSpacing: '0.00938em'
    },
    '.typography-subtitle-2': {
      fontFamily: 'var(--font-inter)',
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.57',
      letterSpacing: '0.00714em'
    },
    '.typography-body-1': {
      fontFamily: 'var(--font-inter)',
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0.00938em'
    },
    '.typography-body-2': {
      fontFamily: 'var(--font-inter)',
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1.43',
      letterSpacing: '0.01071em'
    },
    '.typography-button': {
      fontFamily: 'var(--font-inter)',
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.75',
      letterSpacing: '0.02857em',
      textTransform: 'uppercase'
    },
    '.typography-caption': {
      fontFamily: 'var(--font-inter)',
      fontSize: '0.75rem',
      fontWeight: '400',
      lineHeight: '1.66',
      letterSpacing: '0.03333em'
    },
    '.typography-overline': {
      fontFamily: 'var(--font-inter)',
      fontSize: '0.75rem',
      fontWeight: '400',
      lineHeight: '2.66',
      letterSpacing: '0.08333em',
      textTransform: 'uppercase'
    }
  });
});
