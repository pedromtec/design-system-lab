import { Box, Text } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Box',
  component: Box,
  args: {
    children: (
      <>
        <Text as='span'>It is a box</Text>
      </>
    )
  }
} as Meta

export const Primary: StoryObj = {}

export const Big: StoryObj = {
  
}
