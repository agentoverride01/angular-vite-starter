import { TestBed } from '@angular/core/testing'

import { BofaCardComponent } from './card.component'

describe('Card', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BofaCardComponent ],
    }).compileComponents()
  })

  it('should create card component', () => {
    const fixture = TestBed.createComponent(BofaCardComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

})