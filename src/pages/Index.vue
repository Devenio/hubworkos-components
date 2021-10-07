<template>
  <q-card class="my-card transparent col-12 col-sm-7 col-md-5" flat>
    <q-card-section class="text-h4 text-center">
      HubWork
      <div class="text-subtitle1">پلتفرم توسعه کسب و کار</div>
      <div class="text-subtitle1">شبکه ای برای افزایش بهره وری کسب و کارها</div>
    </q-card-section>
    <q-card-section>
      <q-form @submit="$router.push('/verify')">
        <div class="full-width row items-center justify-between no-wrap">
          <q-input
            v-model="text"
            filled
            label="شماره همراه خود را وارد کنید"
            class="full-width text-right text-subtitle1"
            type="text"
            mask="(###) ### ####"
            prefix="+98" 
          />
        </div>
        <q-btn
          label="ورود به پلتفرم"
          class="full-width q-mt-sm"
          type="submit"
          color="teal"
        />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
