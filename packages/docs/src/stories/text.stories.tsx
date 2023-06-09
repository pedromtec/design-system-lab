import { Text, TextProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Click me',
  }
} as Meta<TextProps<'p'>>



export const Default: StoryObj<TextProps<'p'>> = {
  args: {
   
  }
}

export const Custom: StoryObj<TextProps<'span'>> = {
  args: {
    as: 'span',
  }
}
