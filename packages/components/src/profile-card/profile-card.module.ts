import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BofaAvatarModule } from '../avatar'
import { BofaCardModule } from '../card'
import { BofaContentModule } from '../content'

import { BofaProfileCardComponent } from './profile-card.component'

@NgModule({
  declarations: [ BofaProfileCardComponent ],
  imports: [ BofaAvatarModule, BofaCardModule, BofaContentModule, CommonModule ],
  exports: [ BofaProfileCardComponent ]
})
export class BofaProfileCardModule { }