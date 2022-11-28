import {Ref} from 'vue'

export interface IButton {
  title: string
  class: string
  data?: string
}

export interface IUseModal {
  isOpen: Ref,
  show: () => Promise<void>,
  close: (data: string) => void
}
