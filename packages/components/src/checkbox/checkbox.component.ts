import { Component, EffectRef, EventEmitter, Input, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewChild, booleanAttribute, effect, inject, input } from '@angular/core'

import { BofaCheckboxEventService } from './checkbox-event.service'
import { NgTemplateOutlet } from '@angular/common'

export type CheckBoxType = 'checkbox' | 'button' | 'card'

export interface Checkbox {
  checked?: boolean
  disabled?: boolean
  value?: unknown
}

export type CoreEventTarget<T> = {
  target: (EventTarget | null) & T
  currentTarget: (EventTarget | null) & T
}

@Component({
  selector: 'bofa-checkbox',
  standalone: true,
  template: `
    <ng-template #checkbox>
      <label class="bofa-checkbox">
        <input 
          aria-label="toggle"
          type="checkbox" 
          [checked]="checked"         
          [value]="value"
          [disabled]="disabled"
          (change)="onValueChanged($event)">
        <span>        
          <ng-content></ng-content>
        </span>
      </label>
    </ng-template>
    
    <ng-template #card>
      <ng-container *ngTemplateOutlet="checkbox"></ng-container>
    </ng-template>

    <ng-template #button>
      <ng-container *ngTemplateOutlet="checkbox"></ng-container>
    </ng-template>

    <ng-container [ngTemplateOutlet]="sectedTemplateRef"></ng-container>
  `,
  styleUrls: [ './checkbox.component.scss' ],
  imports: [ NgTemplateOutlet ]
})
export class BofaCheckboxComponent {

  @ViewChild('checkbox') checkbox!: TemplateRef<CheckBoxType>
  @ViewChild('button') button!: TemplateRef<CheckBoxType>
  @ViewChild('card') card!: TemplateRef<CheckBoxType>

  @Input({ transform: booleanAttribute }) checked: boolean = false
  @Input({ transform: booleanAttribute }) disabled: boolean = false
  @Input() type: CheckBoxType = 'checkbox'
  @Input() value: unknown

  changed = new EventEmitter<Checkbox>()

  protected get sectedTemplateRef() {
    return this[this.type] as TemplateRef<CheckBoxType>
  }

  protected onValueChanged(event: Event) {
    const { target: { value, checked, disabled } } = event as CoreEventTarget<Checkbox>
    this.changed.emit({ value, disabled, checked })
  }

}