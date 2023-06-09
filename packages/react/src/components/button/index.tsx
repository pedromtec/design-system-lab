import { ElementType } from 'react'
import { PolymorphicComponentProp } from '../../system/types'
import * as css from './styles.css'

type ButtonProps<C extends ElementType> = PolymorphicComponentProp<
  C,
  css.ButtonVariants
>

export const Button = <C extends ElementType = 'button'>({
  children,
  as,
  size = 'small',
  ...restProps
}: ButtonProps<C>) => {
  const Component = as || 'button'
  const variantClass = css.button({ size })
  return (
    <Component className={variantClass} {...restProps}>
      {children}
    </Component>
  )
}
