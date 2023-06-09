// https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
// https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/#github-repository

import { ElementType } from 'react'
import { PolymorphicComponentProp } from '../../system/types'
import * as css from './styles.css'

export type BoxOptions = {}

type BoxProps<C extends ElementType> = PolymorphicComponentProp<C, BoxOptions>

export const Box = <C extends ElementType = 'div'>({
  as,
  children,
  ...restProps
}: BoxProps<C>) => {
  const Component = as || 'div'

  const boxClasses = css.box

  return (
    <Component {...restProps} className={boxClasses}>
      {children}
    </Component>
  )
}
