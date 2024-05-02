import { Component, AfterContentInit, OnDestroy, OnInit, model, output, effect, contentChildren, EffectRef } from '@angular/core'
import { Subscription } from 'rxjs'

import { BofaCheckboxEventService } from './checkbox-event.service'
import { BofaCheckboxComponent } from './checkbox.component'
import { Checkbox } from './checkbox-base'

export type SelectedChangedValue = {
  selected?: unknown[]
} & Checkbox

@Component({
  selector: 'bofa-checkbox-group',
  standalone: true,
  template: `
    <section class="bofa-checkbox-group">
      <ng-content></ng-content>
    </section>
  `,
  styles: /* scss */`
    :host {
      .bofa-checkbox-group {
        display: var(--checkbox-group-display, grid);
      }
    }
  `,
  providers: [ BofaCheckboxEventService ]
})
export class BofaCheckboxGroupComponent implements OnDestroy, OnInit, AfterContentInit {
  #effects?: EffectRef
  #disposables = new Subscription()

  checkboxes = contentChildren(BofaCheckboxComponent)
  
  selectedChanged = output<SelectedChangedValue>()
  selected = model<unknown[]>([])

  constructor() {
    this.#effects = effect(() => {
      const selected = this.selected()
      if (selected.length) {
        console.log(selected)
        this.checkboxes().forEach(checkbox => {
          
        })
      }
    })
  }

  #selectItem(value: unknown) {
    return this.selected().findIndex(s => {
      return (typeof s == 'object'
        ? JSON.stringify(s) === JSON.stringify(value || {})
        : s?.toString() === value?.toString())
    })
  }

  #updateSelected(checkbox: Checkbox) {
    const { value, checked } = checkbox
    
    const selectIndex = this.#selectItem(value)
  
    if (checked && selectIndex === -1) {
      this.selected.update(current => [ ...current, value ])
    }

    if (!checked && selectIndex !== -1) {
      this.selected.update(current => {
        const value = current.at(selectIndex)
        return current.filter(c => c !== value)
      })
    }
  }

  #onCheckboxNext(checkbox: Checkbox) {
    this.#updateSelected(checkbox)
    this.selectedChanged.emit({ 
      ...checkbox, 
      selected: this.selected()
    })
  }

  ngOnInit() { 

  }

  ngAfterContentInit() {
    const next = this.#onCheckboxNext.bind(this)
    this.checkboxes().forEach(checkbox => {      
      const dispose = checkbox.changed.subscribe(next)
      this.#disposables.add(dispose)
    })
  }

  ngOnDestroy() {
    this.#disposables.unsubscribe()
    this.#effects?.destroy()
  }
}