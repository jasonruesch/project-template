import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { createThemes } from 'tw-colors';
import colors from './base/colors';
import headings from './base/headings';
import buttons from './components/buttons';
import grid from './components/grid';

export const tailwindPreset = {
  theme: {
    colors: {
      current: colors.current,
      inherit: colors.inherit,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
    },
    extend: {},
  },
  plugins: [
    forms,
    aspectRatio,
    require('tailwindcss-safe-area'),
    createThemes(
      ({ light, dark }) => ({
        light: light({
          primary: colors.cyan,
          secondary: colors.fuchsia,
          neutral: colors.neutral,
          success: colors.green,
          warning: colors.yellow,
          danger: colors.red,
          info: colors.blue,
        }),
        dark: dark({
          primary: colors.violet,
          secondary: colors.teal,
          neutral: colors.neutral,
          success: colors.green,
          warning: colors.yellow,
          danger: colors.red,
          info: colors.blue,
        }),
      }),
      {
        defaultTheme: {
          light: 'light',
          dark: 'dark',
        },
        strict: true,
        produceThemeClass: (themeName) => `theme-${themeName}`,
        produceThemeVariant: (themeName) => `theme-${themeName}`,
      },
    ),
    plugin(({ addBase, addComponents }) => {
      addBase(headings);

      addComponents(grid);
      addComponents(buttons);
    }),
  ],
} satisfies Omit<Config, 'content'>;

export default tailwindPreset;
