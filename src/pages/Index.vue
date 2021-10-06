<template>
  <q-page class="row items-center justify-evenly" padding>
    <CodeInput />
  </q-page>
</template>

<script lang="ts">
// import { Todo, Meta } from 'components/models';
import { defineComponent } from 'vue';
import CodeInput from '../components/CodeInput.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    CodeInput,
  },
  setup() {
    return {};
  },
});
</script>
