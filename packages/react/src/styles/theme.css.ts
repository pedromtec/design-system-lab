import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'
import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
})

globalStyle('body', {
  background: vars.colors.gray800,
})
