<template>
  <q-input
    type="text"
    class="input text-h5"
    maxlength="1"
    style="width: 15%"
    filled
    @update:model-value="changefocus(index)"
    v-for="(n, index) in 6"
    :key="index"
    v-model="text[index]"
    :ref="(el) => (inputsEls[index] = el)"
  />
  <!-- :ref="`x-${index}`" -->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, Ref } from 'vue';
import { UnknownObject } from './models';

export default defineComponent({
  setup() {
    const text = ref<string[]>([]);
    const inputsEls = ref<UnknownObject>([]);
    const activeIndex = ref<number>(0);

    onMounted(() => {
      // centeralize all input elements of page
      const inputs: NodeListOf<Element> = document.querySelectorAll('input');
      inputs.forEach((input) => input.classList.add('text-center'));
    });

    // Functions
    function changefocus(index: number) {
      activeIndex.value = index + 1;
      console.log(activeIndex.value);
      if (!!inputsEls.value) {
        // inputsEls.value[index + 1].focus();
      }
    }

    return {
      text,
      inputsEls,
      activeIndex,
      changefocus,
    };
  }
});
</script>

