import type { StoryObj, Meta } from '@storybook/angular'

import { moduleMetadata } from "@storybook/angular"
import { defineDefaultArgs } from '@bofa/storybook-utils'

import { BofaCheckboxComponent } from './checkbox.component'
import { BofaCheckboxModule } from './checkbox.module'

export default {
  title: 'Components/Checkbox',
  component: BofaCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [ BofaCheckboxModule ]
    })
  ],
  ...defineDefaultArgs({
    render: (args) => ({
      template: /* html */`
        <bofa-checkbox-group [selected]="[2]">
          <bofa-checkbox value="1">Orange</bofa-checkbox>
          <bofa-checkbox value="2" checked>Apple</bofa-checkbox>
          <bofa-checkbox value="3" disabled>Grapes</bofa-checkbox>
        </bofa-checkbox-group>
      `,
    })
  })
}

export const Default: StoryObj<BofaCheckboxComponent> = {
  args: {}
}