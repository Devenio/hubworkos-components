<template>
  <q-card class="my-card transparent col-12 col-sm-7 col-md-5" flat>
    <q-card-section class="text-h4 text-center">
      OTP Validation
    </q-card-section>
    <q-card-section class="text-subtitle1 text-right">
      کد دریافت شده بر روی تلفن همراه خود را وارد نمایید
    </q-card-section>
    <q-card-section>
      <q-form @submit="$router.push('/info')">
        <div class="full-width row items-center justify-between no-wrap">
          <CodeInput />
        </div>
        <q-btn
          label="ورود به پلتفرم"
          class="full-width q-mt-sm"
          type="submit"
          color="teal"
        />
      </q-form>
    </q-card-section>
    <q-card-section dir="rtl">
      <div class="cursor-pointer">دریافت مجدد OTP</div>
      <div class="cursor-pointer">تغییر شماره تلفن همراه</div>
    </q-card-section>
  </q-card>
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
