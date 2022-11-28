<script lang="ts" setup>
import { defineEmits, defineProps, onMounted, ref } from 'vue'
import { IButton } from '@/types/interface'
import { useStore } from 'vuex'

defineEmits(['result'])

defineProps<{
  buttons: IButton[]
}>()

const store = useStore()
const isShow = ref(false)

onMounted(() => {
  isShow.value = true
  store.commit('setScrollBody')
})
</script>

<template>
  <teleport to="body">
    <div
      class="modal"
    >
      <transition name="fade">
        <div
          v-if="isShow"
          class="modal__inner"
        >

          <div class="modal__content">
            <slot name="content" />
          </div>

          <div class="modal__button">
            <button
              v-for="btn in buttons"
              :key="btn.title"
              :class="btn.class"
              @click="$emit('result', btn.data)"
            >
              {{ btn.title }}
            </button>
            <button
              v-if="!buttons.length"
              class="default"
              @click="$emit('result')"
            >
              Ok
            </button>
          </div>

        </div>
      </transition>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: absolute;
  left: 0;
  top: 0;

  min-height: 100%;
  height: 100%;
  width: 100%;
  background-color: rgba(44, 62, 80, .5);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__inner {
  padding: 20px;

  width: 800px;
  height: auto;
  max-height: 800px;

  background: #fff;

  overflow-y: auto;
}

.modal__content {
  margin-bottom: 40px;
}

.modal__button {
  text-align: center;
}

.modal__button button:first-child {
  margin-right: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
