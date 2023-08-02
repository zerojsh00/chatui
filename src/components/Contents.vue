<template>
  <v-main class="d-flex align-center flex-column bg-grey-lighten-3">
    <v-app-bar class="bg-grey-darken-3" title="Cloud GPT"></v-app-bar>
    <v-container>
      <div class="card-group" v-if="convHist.length > 0">
        <div class="mx-auto w-70" v-for="(td, i) in convHist" :key="i">
          <v-card
            class="card"
            variant="tonal"
            prepend-icon="mdi-account-circle"
          >
            <v-card-text>
              {{ td.query }}
            </v-card-text>
          </v-card>
          <v-card class="card" prepend-icon="mdi-robot-excited">
            <v-card-text>
              {{ td.resp }}
            </v-card-text>
          </v-card>
        </div>
      </div>
    </v-container>

    <div class="h-100" style="padding: 100px"></div>

    <div class="mx-auto w-50 prompt">
      <Prompt @respResults="pushResult" />
    </div>
  </v-main>
</template>

<script>
import Prompt from "@/components/Prompt.vue";
import convHist from "@/assets/conversation.js";

export default {
  name: "ContentsComponent",
  data() {
    return {
      convHist: convHist,
    };
  },
  methods: {
    pushResult(response) {
      const conv = { query: response.query, resp: response.resp };

      this.convHist.push(conv);
      console.log(this.convHist);
    },
  },

  components: {
    Prompt,
  },
};
</script>
<style scoped>
.prompt {
  /* margin: 0px 0px 0px 0px; */
  height: 10rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
}
.card {
  margin: 10px 0px 10px 0px;
}

/* .card-group {
  height: calc(100vh - 300px);
  overflow-y: scroll;
} */
</style>
