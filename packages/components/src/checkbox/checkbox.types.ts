export type CheckBoxType = 'checkbox' | 'button'

export type CoreEventTarget<T> = {
  target: (EventTarget | null) & T
  currentTarget: (EventTarget | null) & T
} 

export interface Checkbox {
  checked?: boolean
  disabled?: boolean
  value?: unknown
}