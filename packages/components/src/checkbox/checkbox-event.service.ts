import { EventEmitter, Injectable } from '@angular/core'
import { Subject } from 'rxjs'

export class BofaCheckboxEventService {
  changed = new Subject()
}