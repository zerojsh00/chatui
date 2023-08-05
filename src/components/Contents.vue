<template>
  <v-main class="d-flex align-center flex-column bg-grey-lighten-4">
    <v-app-bar
      v-if="isNewChat == false"
      class="grey-lighten-5 text-center"
      title="CloudGPT"
    ></v-app-bar>
    <v-container v-if="isNewChat == true"
      ><div class="info">
        <div class="text-h3 text-center font-weight-black">CloudGPT</div>

        <v-row no-gutters class="info">
          <v-col cols="12" sm="4">
            <div class="text-h5 text-center">Examples</div>
            <v-sheet class="ma-4 pa-2 rounded text-center"
              >Remembers what user said earlier in the conversation</v-sheet
            >
            <v-sheet class="ma-4 pa-2 rounded text-center"
              >Remembers what user said earlier in the conversation</v-sheet
            >
            <v-sheet class="ma-4 pa-2 rounded text-center"
              >Remembers what user said earlier in the conversation</v-sheet
            ></v-col
          >
          <v-col cols="12" sm="4">
            <div class="text-h5 text-center">Examples</div>
            <v-sheet class="ma-4 pa-2 rounded text-center"
              >Remembers what user said earlier in the conversation</v-sheet
            >
            <v-sheet class="ma-4 pa-2 rounded text-center"
              >Remembers what user said earlier in the conversation</v-sheet
            >
            <v-sheet class="ma-4 pa-2 rounded text-center"
              >Remembers what user said earlier in the conversation</v-sheet
            ></v-col
          >
          <v-col cols="12" sm="4">
            <div class="text-h5 text-center">Examples</div>
            <v-sheet class="ma-4 pa-2 rounded text-center"
              >Remembers what user said earlier in the conversation</v-sheet
            >
            <v-sheet class="ma-4 pa-2 rounded text-center"
              >Remembers what user said earlier in the conversation</v-sheet
            >
            <v-sheet class="ma-4 pa-2 rounded text-center"
              >Remembers what user said earlier in the conversation</v-sheet
            ></v-col
          >
        </v-row>
      </div></v-container
    >
    <v-container>
      <div v-if="convHist.length > 0">
        <div class="mx-auto w-70" v-for="(td, i) in convHist" :key="i">
          <v-card
            class="card"
            variant="tonal"
            prepend-icon="mdi-account-circle"
          >
            <v-card-text>
              {{ convHist[i].query }}
            </v-card-text>
          </v-card>
          <v-card class="card" prepend-icon="mdi-robot-excited">
            <v-card-text>
              {{ convHist[i].resp }}
            </v-card-text>
          </v-card>
        </div>
      </div>
    </v-container>

    <div style="height: 100px"></div>

    <Prompt @userQuery="pushQuery" @chatResponse="pushResponse" />
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
      isNewChat: true,
    };
  },
  created() {
    this.isNewChat = convHist.length > 0 ? false : true;
  },
  methods: {
    pushQuery(userQuery) {
      if (this.isNewChat) {
        this.isNewChat = false;
      }
      this.convHist.push({ query: userQuery });
    },
    pushResponse(response) {
      this.convHist[convHist.length - 1].resp = response;
    },
  },

  components: {
    Prompt,
  },
};
</script>
<style scoped>
.card {
  margin: 10px 0px 10px 0px;
}

.v-container {
  width: 70%;
}

.info {
  margin-top: 60px;
  overflow: hidden;
}
</style>
