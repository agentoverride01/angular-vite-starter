import { EventEmitter, booleanAttribute, input } from '@angular/core'

export interface Checkbox {
  checked?: boolean
  disabled?: boolean
  value?: unknown
}

export type CoreEventTarget<T> = {
  target: (EventTarget | null) & T
  currentTarget: (EventTarget | null) & T
} 

export class CheckboxBase {
  changed = new EventEmitter<Checkbox>()

  checked = input(false, { transform: booleanAttribute })
  disabled = input(false, { transform: booleanAttribute })
  value = input()

  protected onValueChanged(event: Event) {
    const { target: { value, checked, disabled } } = event as CoreEventTarget<Checkbox>
    this.changed.emit({ value, disabled, checked })
  }
}