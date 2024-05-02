import type { StoryObj } from '@storybook/angular'
import type { StoryThemeObj } from '@zeke/storybook-utils'

import { defineDefaultArgs } from '@zeke/storybook-utils'

import { BofaCardComponent } from './card.component'

type Story = StoryObj<StoryThemeObj & BofaCardComponent>

export default {
  title: 'Components/Card',
  component: BofaCardComponent,
  ...defineDefaultArgs({
    render: (args) => ({
      props: args,
      styles: [ /* scss */ `
        bofa-card {
          --card-width: 50%;
        }
      `]
    })
  })
}

export const Card: Story = {
  args: {}
}