import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const box = style({
  padding: vars.space[4],
  borderRadius: vars.radii.md,
  backgroundColor: vars.colors.gray600,
  border: `1px solid ${vars.colors.gray600}`,
})
