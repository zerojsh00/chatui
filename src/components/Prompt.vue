<template>
  <v-textarea
    id="prompt_area"
    class="h-50 elevation-24"
    ref="inputRef"
    prepend-inner-icon="mdi-comment"
    append-inner-icon="mdi-send-circle"
    v-bind="{ loading: isLoading }"
    clearable
    clear-icon="mdi-close-circle"
    variant="solo-filled"
    rows="1"
    row-height="1"
    auto-grow
    label="메시지를 입력해주세요."
    model-value="안녕하세요"
    @keyup.enter="submit"
  ></v-textarea>
</template>

<script>
import axios from "axios";

export default {
  name: "PromptComponent",
  data() {
    return { isLoading: false };
  },

  methods: {
    async submit() {
      const prompt_area = document.getElementById("prompt_area");
      const userInput = prompt_area.value.trim();
      // prompt_area.value = "";
      this.$refs.inputRef.reset();

      const apiKey = "";
      const endpoint = "https://api.openai.com/v1/chat/completions";

      if (userInput.length > 0) {
        try {
          this.isLoading = true;
          await axios
            .post(
              endpoint,
              {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userInput }],
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${apiKey}`,
                },
              }
            )
            .then((response) => {
              const result = response.data.choices[0].message.content;
              this.$emit("respResults", { query: userInput, resp: result });
            });
        } catch (error) {
          console.error("Error : ", error);
        }
      }
      this.isLoading = false;
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
