import type { StoryObj } from '@storybook/angular'
import type { StoryThemeObj } from '@zeke/storybook-utils'

import { defineDefaultArgs } from '@zeke/storybook-utils'

import { BofaAvatarComponent } from './avatar.component'

type Story = StoryObj<StoryThemeObj & BofaAvatarComponent>

export default {
  title: 'Components/Avatar',
  component: BofaAvatarComponent,
  ...defineDefaultArgs()
}

export const Avatar: Story = {
  args: {
    src: 'https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp',
    alt: ''
  }
}