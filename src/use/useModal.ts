import { ref } from 'vue'
import { IUseModal } from '@/types/interface'
import { useStore } from 'vuex'

export function useModal (): IUseModal {
  const store = useStore()
  const isOpen = ref(false)
  let promise: {
    resolve?: (data: string) => void
    reject?: (reason: string) => void
  } = {}

  const show = () => {
    isOpen.value = true
    return new Promise<string>((resolve, reject) => {
      promise = { resolve, reject }
    }).then(data => console.log(data))
  }

  const close = (data: string) => {
    store.commit('setScrollBody')
    isOpen.value = false
    // ts dont watch Reflect.has and i dont like to use ! at work
    if (promise.resolve) {
      promise.resolve(`response: ${data}`)
    }
  }

  return {
    isOpen,
    close,
    show
  }
}
