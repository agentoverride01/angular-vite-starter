import type { StoryObj, Meta } from '@storybook/angular'
import { defineDefaultArgs } from '@zeke/storybook-utils'

import { moduleMetadata } from "@storybook/angular"

import { BofaCheckboxGroupComponent } from './checkbox-group.component'
import { BofaCheckboxComponent } from './checkbox.component'

export default {
  title: 'Components/Checkbox',
  component: BofaCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [ BofaCheckboxGroupComponent ]
    })
  ],
  ...defineDefaultArgs({
    render: (args) => ({
      template: /* html */`
        <bofa-checkbox-group [selected]="[2, 3]">
          <bofa-checkbox value="1" type="button" checked>Orange</bofa-checkbox>
          <bofa-checkbox value="2" checked>Apple</bofa-checkbox>
          <bofa-checkbox value="3" checked disabled>Grapes</bofa-checkbox>
        </bofa-checkbox-group>
      `
    })
  })
}

export const Default: StoryObj<BofaCheckboxComponent> = {
  args: {}
}