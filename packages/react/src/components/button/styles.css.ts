import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/theme.css'

export const button = recipe({
  base: {
    fontFamily: vars.fonts.default,
    background: vars.colors.ignite300,
    borderRadius: vars.radii.sm,
    border: 0,
    fontWeight: 'bold',
    color: vars.colors.white,
  },

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: `${vars.space[2]} ${vars.space[4]}`,
      },
      big: {
        fontSize: 16,
        padding: `${vars.space[3]} ${vars.space[6]}`,
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
