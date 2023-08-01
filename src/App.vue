<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <Navigation />
      <Contents v-bind:textData="textData" />
    </v-layout>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Contents from "@/components/Contents.vue";
import textData from "@/assets/textData.js";

export default {
  name: "App",

  components: {
    Contents,
    Navigation,
  },

  data() {
    return {
      textData: textData,
    };
  },
};
</script>
