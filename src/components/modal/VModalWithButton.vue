<script setup lang="ts">
import { defineProps } from 'vue'
import { useModal } from '@/use/useModal'
import { IButton } from '@/types/interface'
import VModalDialog from '@/components/modal/VModal.vue'

defineProps<{
  buttons: IButton[]
  buttonOpen: IButton
}>()

const { isOpen, show, close } = useModal()
</script>

<template>
  <v-modal-dialog
    v-if="isOpen"
    :buttons="buttons"
    @result="close"
  >
    <template #content>
      <slot name="content" />
    </template>
  </v-modal-dialog>

  <button
    @click="show"
    :class="buttonOpen.class"
  >
    {{ buttonOpen.title }}
  </button>

  <button
    v-if="!buttonOpen"
    @click="show"
  >
    Открыть модальное окно
  </button>
</template>
