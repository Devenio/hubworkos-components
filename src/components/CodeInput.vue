<template>
  <div class="">
    <q-card class="my-card">
      <q-card-section class="text-h6">
        Please enter OTP code to continue
      </q-card-section>
      <q-card-section>
        <q-form>
          <div class="full-width row items-center justify-between no-wrap">
            <q-input
              type="text"
              class="input text-h5"
              maxlength="1"
              style="width: 15%"
              filled
              bottom-slots
              :autofocus="activeIndex === index ? true : false"
              @focus="changefocus(index)"
              @update:model-value="changefocus(index)"
              v-for="(n, index) in 5"
              :key="index"
              :ref="(el) => (inputsEls[index] = el)"
              v-model="text[index]"
            />
          </div>
          <q-btn
            label="Submit"
            class="full-width q-mt-sm"
            type="submit"
            color="green"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, Ref } from 'vue';

export default defineComponent({
  setup() {
    const text = ref<string[]>([]);
    const inputsEls: Record<string, unknown> = ref([]);
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
      // if (!!inputsEls.value) {
        inputsEls.value[index + 1].focus();
      // }
    }

    return {
      text,
      inputsEls,
      activeIndex,
      changefocus,
    };
  },
});
</script>

<style scoped>
.my-card {
  max-width: 400px;
}
</style>
