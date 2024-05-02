import type { StoryObj } from '@storybook/angular'
import type { StoryThemeObj } from '@zeke/storybook-utils'

import { argsToTemplate } from "@storybook/angular"
import { defineDefaultArgs } from '@zeke/storybook-utils'

import { BofaProfileCardComponent, ProfileCardValue  } from './profile-card.component'

export default {
  title: 'Components/ProfileCard',
  component: BofaProfileCardComponent,
  ...defineDefaultArgs({
    render(args: ProfileCardValue) {
      const props = { value: args }
      return { 
        props, 
        template: /* html */` <bofa-profile-card ${argsToTemplate(props)} />`,
        styles: [ /* scss */`
          ::ng-deep .profile-card bofa-content {
            --content-section-column-gap: 10px !important;
          }
        `]
      }
    }
  }),
  parameters: {
    actions: { disable: true }
  }
}

export const ProfileCard: StoryObj<StoryThemeObj & ProfileCardValue> = {
  args: {
    imgSrc: 'https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp',
    name: 'Arjay Elbore',
    title: 'Software Engineer',
    email: 'arjay.elbore@bofa.com',
    contacts: {
      office: '12312',
      mobile: '+6598142033'
    }
  }
}