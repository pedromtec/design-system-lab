import { Button, ButtonProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Click me',
  }
} as Meta<ButtonProps<'button'>>

export const Primary: StoryObj = {}

export const Big: StoryObj<ButtonProps<'button'>> = {
  args: {
    size: 'big'
  }
}
