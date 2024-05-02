import { TestBed } from '@angular/core/testing'

import { BofaContentComponent } from './content.component'

describe('Content', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BofaContentComponent ],
    }).compileComponents()
  })

  it('should create content component', () => {
    const fixture = TestBed.createComponent(BofaContentComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

})