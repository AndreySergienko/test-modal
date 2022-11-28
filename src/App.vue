<template>
  <div class="main">
    <v-modal
      :buttons="btns"
      :buttonOpen="btn"
    >
      <template #content>
        <h2 class="title">Модальное окно</h2>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nemo officiis perspiciatis quasi
          reprehenderit totam. Alias assumenda eaque error eum labore optio possimus provident quidem tempora.
          Cupiditate ducimus excepturi iste?
        </div>
        <div>At aut doloribus excepturi fugiat id impedit magnam magni minima, nam nobis nostrum quas quasi
          reprehenderit, sed sit unde velit vero, voluptas! Enim fugiat optio repellat sequi unde vero voluptatem!
        </div>
        <div>A ab et ex magni maxime mollitia possimus quaerat quidem voluptate voluptatum? Aut commodi dignissimos,
          eligendi enim error esse minima molestias natus quam quidem repellendus similique tempora vero vitae
          voluptate!
        </div>
        <div>Dignissimos dolores, dolorum earum esse eveniet in ipsum maxime perferendis possimus provident quia, rerum
          similique, sit suscipit ut. Adipisci cum error ex iusto neque odio optio quibusdam sint temporibus veniam.
        </div>
        <div>Accusamus adipisci atque aut beatae, blanditiis dolorem dolores doloribus, earum ex fugit impedit ipsa,
          molestiae perferendis placeat praesentium quod sint sunt suscipit vitae voluptatibus! Aut doloribus iusto
          officia quo voluptates.
        </div>
        <div>Aliquam assumenda cupiditate eius eos est ipsum perspiciatis voluptatum. Assumenda consequatur cum,
          cupiditate ea est explicabo id illo impedit, inventore ipsam laboriosam nostrum obcaecati officia sit
          temporibus, veritatis vitae voluptas?
        </div>
        <div>Accusantium consequatur, corporis cumque eaque nam quisquam quos suscipit voluptates! Accusamus blanditiis,
          eaque explicabo iste maiores quo similique sit tempore? Atque distinctio dolor eaque eum fuga harum ipsam
          omnis possimus.
        </div>
        <div>A aspernatur aut eaque facere magni molestiae unde. Accusantium aut cupiditate deleniti dolorum eveniet,
          exercitationem expedita maxime nam nihil non numquam odio omnis pariatur quae quaerat quia rerum sed vel!
        </div>
        <div>Accusamus aliquam aperiam asperiores commodi cum debitis error exercitationem explicabo hic id incidunt
          laboriosam laudantium, molestias mollitia obcaecati officiis optio quae quaerat quam quibusdam repudiandae
          sint soluta velit voluptatem voluptatibus.
        </div>
        <div>Aperiam autem iste iusto libero maxime obcaecati pariatur praesentium quia similique voluptates! Aliquid
          at, deleniti earum eligendi enim, eum harum ipsam iure maiores, molestiae molestias neque optio porro ut
          voluptates.
        </div>
      </template>
    </v-modal>
  </div>

<!--  For add scroll body -->
  <div class="more"></div>
</template>

<script lang="ts" setup>
import VModal from '@/components/modal/VModalWithButton.vue'
import { IButton } from '@/types/interface'

// By analogy with the buttons possibly create input field. - validation create by means Vuelidate and add every field object flag isValidate
// next- who have isValidate - validate onBlur/onInput and onSubmit
const btns: Array<IButton> = [
  {
    title: 'Ok',
    class: 'success primary',
    data: 'Success'
  },
  {
    title: 'Fail',
    class: 'success primary',
    data: 'Fail'
  }
]

const btn: IButton = {
  title: 'Открыть модалку',
  class: 'center'
}
</script>

<style>
:root {
  --dark: rgba(2,0,36,1);
  --border-radius: 15px;
}

body {
  margin: 0;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, var(--dark) 0%, rgba(57,64,107,1) 35%, rgba(0,212,255,1) 100%);
}

.main {
  height: 100vh;

  display: flex;
  align-items: center;
}

.center {
  display: block;
  margin: 0 auto;
}

button {
  padding: .7em 2em;

  border-radius: var(--border-radius);
  border: 1px solid var(--dark);
  outline: none;
  cursor: pointer;
  background: #FFF;

  font-size: 16px;
  color: var(--dark);
}

.no-scroll {
  overflow: hidden;
}

.more {
  height: 5000px;
}
</style>
