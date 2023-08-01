<template>
  <div class="prompt">
    <v-textarea
      id="prompt_area"
      prepend-inner-icon="mdi-comment"
      append-inner-icon="mdi-send-circle"
      clearable
      clear-icon="mdi-close-circle"
      variant="solo-filled"
      auto-grow
      label="메시지를 입력해주세요."
      model-value="AWS (서울 리전)에서 vCPU 2개 이상을 가진 가상머신 스펙은 무엇인가요?"
      @keyup.enter="submit"
    ></v-textarea>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PromptComponent",
  props: {
    textData: Array,
  },

  methods: {
    async submit() {
      let prompt_area = document.getElementById("prompt_area");
      const text = prompt_area.value;
      const apiKey = "";
      const endpoint = "https://api.openai.com/v1/chat/completions";
      let result = "";
      prompt_area.value = "";

      try {
        await axios
          .post(
            endpoint,
            {
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: text }],
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
              },
            }
          )
          .then((response) => {
            result = response.data.choices[0].message.content;
            // console.log(result);
          });
        this.textData.push(result);
      } catch (error) {
        console.error("Error : ", error);
      }
    },
  },
};
</script>

<style>
#prompt_area {
  resize: none;
}
</style>
