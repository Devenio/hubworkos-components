<template>
  <q-card class="my-card transparent col-12 col-sm-7 col-md-5" flat>
    <q-card-section class="" dir="rtl">
      <q-form class="column border rounded-borders">
        <q-checkbox v-model="select" label="کسب و کار دارم." val="1" color="teal" />
        <q-checkbox v-model="select" label="فریلنسر هستم." val="2" color="teal" />
        <q-checkbox v-model="select" label="تمایل دارم توسعه دهنده HubCore باشم." val="3" color="teal" />
        <q-checkbox v-model="select" label="فضای کار اشتراکی دارم." val="4" color="teal" />
      </q-form>
    </q-card-section>
    <q-card-section>
      <q-form>
        <div class="full-width row items-center justify-between no-wrap">
          <q-input
            v-model="text"
            filled
            label="نام و نام خانوادگی"
            class="full-width text-right text-subtitle1"
            type="text"
          />
        </div>
        <q-btn
          label="ادامه"
          class="full-width q-mt-sm"
          type="submit"
          color="teal"
        />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
// import { Todo, Meta } from 'components/models';
import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const select = ref([]);
    return {
      select,
    };
  },
});
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid #cccccc50;
}
</style>
