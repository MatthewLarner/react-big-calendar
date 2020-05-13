import { create } from '@storybook/theming'

const colorSecondary = 'rgb(49, 116, 173)'

export default create({
  base: 'light',

  colorSecondary,

  // UI
  appBg: 'white',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barBg: colorSecondary,

  // Form colors
  inputBg: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Big Calendar',
  brandUrl: 'http://intljusticemission.github.io/react-big-calendar/examples',
})
