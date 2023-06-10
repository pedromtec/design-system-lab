import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'

type AsProp<C extends ElementType> = {
  as?: C
}
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P)

export type PolymorphicComponentProp<
  C extends ElementType,
  Props = {},
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>
