<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <Navigation />
      <Contents />
    </v-layout>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Contents from "@/components/Contents.vue";

export default {
  name: "App",
  compatConfig: { MODE: 3 },

  components: {
    Contents,
    Navigation,
  },
};
</script>
