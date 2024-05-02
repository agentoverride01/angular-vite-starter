import { TestBed } from '@angular/core/testing'
import { Component } from '@angular/core'
import { By } from '@angular/platform-browser'

import { BofaProfileCardComponent, ProfileCardValue } from './profile-card.component'

describe('ProfileCard', () => {

  beforeAll(async () => {
    await TestBed.configureTestingModule({
      imports: [ BofaProfileCardComponent ],
    }).compileComponents()
  })

  it('should create profile-card component', () => {
    const fixture = TestBed.createComponent(BofaProfileCardComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should bind the input value', () => {
    const value: ProfileCardValue = {
      imgSrc: 'https://2019.ng-my.org/assets/imgs/speakers/arjay-elbore.webp',
      name: 'Jane Doe',
      title: 'Software Engineer',
      email: 'jane.doe@bofa.com',
      contacts: { office: '12312', mobile: '+6598142033' }
    }

    @Component({
      standalone: true,
      template: `<bofa-profile-card [value]="value" />`,
      imports: [ BofaProfileCardComponent ]
    })
    class TestComponent {
      value = value
    }

    const fixture = TestBed.createComponent(TestComponent)
    fixture.autoDetectChanges()

    const getTextContent = (selector: string) => {
      return fixture.debugElement
        .query(By.css(selector))
        .nativeElement
        .textContent
    }

    expect(getTextContent('label[for=name]')).toStrictEqual(value.name)
    expect(getTextContent('label[for=title]')).toStrictEqual(value.title)
    expect(getTextContent('label[for=email]')).toStrictEqual(value.email)
  })

})