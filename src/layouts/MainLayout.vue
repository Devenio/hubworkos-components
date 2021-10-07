<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-10">
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <!-- <q-toolbar-title> Quasar App </q-toolbar-title> -->
        <q-space />
        <q-btn flat class="transparent" rounded @click="$q.dark.toggle()">
          <q-icon :name="$q.dark.isActive ? 'brightness_5' : 'dark_mode'" />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="row items-center justify-evenly" padding>
        <!-- <div class="col-12 col-sm-" style="max-width: 500px">
          <q-img
            :src="'https://placeimg.com/500/300/nature'"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div> -->
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const $q = useQuasar();
    $q.dark.set(true);

    function toggleTheme() {
      $q.dark.toggle();
    }

    return {
      toggleTheme,
    };
  },
});
</script>
