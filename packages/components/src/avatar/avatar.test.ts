import { TestBed } from '@angular/core/testing'

import { BofaAvatarComponent } from './avatar.component'

describe('Avatar', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BofaAvatarComponent ],
    }).compileComponents()
  })

  it('should create avatar component', () => {
    const fixture = TestBed.createComponent(BofaAvatarComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

})