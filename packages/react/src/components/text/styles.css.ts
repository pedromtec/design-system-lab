import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/theme.css'

export const text = recipe({
  base: {
    fontFamily: vars.fonts.default,
    lineHeight: vars.lineHeights.base,
    margin: 0,
    color: vars.colors.gray100,
  },

  variants: {
    size: { ...vars.fontSizes },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type TextVariants = RecipeVariants<typeof text>
