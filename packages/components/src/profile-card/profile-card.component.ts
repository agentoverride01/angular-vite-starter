import { Component, Input } from '@angular/core'

import { BofaAvatarComponent } from '@bofa/avatar'
import { BofaCardComponent } from '@bofa/card'
import { BofaContentComponent } from '@bofa/content'

export interface ProfileCardValue {
  imgSrc?: string
  name?: string
  title?: string
  email?: string
  contacts?: {
    office?: string
    mobile?: string
  }
}

@Component({
  selector: 'bofa-profile-card',
  standalone: true,
  template: `
    <bofa-card class="profile-card">
      <bofa-content>
        <section>
          <section class="profile-card--checkbox">
            <span>
              <input type="checkbox" aria-label="toogle" />
            </span>
          </section>
          <bofa-avatar [src]="value?.imgSrc"></bofa-avatar>
          <section class="profile-card--info" data-testid="profile-card--info">
            <label for="name">{{value?.name}}</label>
            <label for="title">{{value?.title}}</label>
            <label for="email">
              @if (value?.email) {
                <a href="mailto:{{value?.email}}">{{value?.email}}</a>
              }
            </label>
            <section class="profile-card--contacts">
              <label for="office">
                <span>OFFICE</span>
                <span>{{value?.contacts?.office}}</span>
              </label>
              <label for="mobile">
                <span>MOBILE</span>
                <span>{{value?.contacts?.mobile}}</span>
              </label>
            </section>
          </section>
        </section>
      </bofa-content>
    </bofa-card>
  `,
  styleUrls: [ './profile-card.component.scss' ],
  imports: [ 
    BofaAvatarComponent, 
    BofaCardComponent, 
    BofaContentComponent 
  ]
})
export class BofaProfileCardComponent { 

  @Input() value?: ProfileCardValue

}