<template>
  <div>
    <v-app-bar class="bg-grey-darken-3" title="Cloud GPT"></v-app-bar>

    <v-main class="d-flex align-center flex-column bg-grey-lighten-3">
      <v-container>
        <v-card
          class="mx-auto"
          prepend-icon="mdi-robot-excited"
          style="margin: 30px"
          v-for="(td, i) in textData"
          :key="i"
        >
          <v-card-text>
            {{ td.text }}
          </v-card-text>
        </v-card>
      </v-container>
      <v-container> <Prompt v-bind:textData="textData" /> </v-container>
    </v-main>
  </div>
</template>

<script>
import Prompt from "@/components/Prompt.vue";

export default {
  name: "ContentsComponent",
  props: {
    textData: Array,
  },
  components: { Prompt },
};
</script>
