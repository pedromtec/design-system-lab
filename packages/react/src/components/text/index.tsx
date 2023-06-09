import { ElementType } from 'react'
import { PolymorphicComponentProp } from '../../system/types'
import * as css from './styles.css'

export type TextProps<C extends ElementType> = PolymorphicComponentProp<
  C,
  css.TextVariants
>

export const Text = <C extends ElementType = 'p'>({
  children,
  as,
  size = 'md',
  ...restProps
}: TextProps<C>) => {
  const Component = as || 'p'
  const variantClass = css.text({ size })
  return (
    <Component className={variantClass} {...restProps}>
      {children}
    </Component>
  )
}
