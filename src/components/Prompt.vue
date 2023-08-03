<template>
  <v-textarea
    id="prompt_area"
    class="h-50 elevation-24"
    ref="inputRef"
    prepend-inner-icon="mdi-comment"
    append-inner-icon="mdi-send-circle"
    v-bind="{ loading: isLoading, disabled: isGenerating }"
    clearable
    clear-icon="mdi-close-circle"
    variant="solo-filled"
    rows="1"
    row-height="1"
    auto-grow
    label="메시지를 입력해주세요."
    model-value="안녕하세요"
    @keypress.enter.exact.prevent="handleChange($event)"
  ></v-textarea>
</template>

<script>
import axios from "axios";

export default {
  name: "PromptComponent",
  data() {
    return { isLoading: false, isGenerating: false, userQuery: "" };
  },

  methods: {
    handleChange($event) {
      this.$refs.inputRef.reset();
      this.userQuery = $event.target.value.trim();

      this.$emit("userQuery", this.userQuery);
      console.log("userQuery in the handleChange func >>> " + this.userQuery);
      this.submit($event);
    },

    async submit() {
      console.log("userQuery in the submit func >>> " + this.userQuery);

      const apiKey = "";
      const endpoint = "https://api.openai.com/v1/chat/completions";

      if (this.userQuery.length > 0) {
        try {
          this.isLoading = true;
          this.isGenerating = true;
          await axios
            .post(
              endpoint,
              {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: this.userQuery }],
                // stream: true,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${apiKey}`,
                },
              }
            )
            .then((response) => {
              const chatResponse = response.data.choices[0].message.content;
              this.$emit("chatResponse", chatResponse);
              console.log("chatResponse >>> " + chatResponse);
            });
        } catch (error) {
          console.error("Error : ", error);
        }
      }
      this.isLoading = false;
      this.isGenerating = false;
    },
  },
};
</script>

<style>
#prompt_area {
  resize: none;
  min-height: 5em;
  max-height: 50vh;
}
</style>
