<template>
  <div class="prompt_wrapper">
    <v-container class="prompt">
      <v-textarea
        id="prompt_area"
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
        label="Send a message"
        model-value="안녕하세요"
        @keypress.enter.exact.prevent="handleChange($event)"
      ></v-textarea>
    </v-container>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "PromptComponent",
  data() {
    return {
      isLoading: false,
      isGenerating: false,
      userQuery: "",
    };
  },

  methods: {
    handleChange($event) {
      this.$refs.inputRef.reset();
      this.userQuery = $event.target.value.trim();

      if (this.userQuery.length > 0) {
        this.$emit("userQuery", this.userQuery);
        console.log("userQuery in the handleChange func >>> " + this.userQuery);
        this.submit($event);
      }
    },

    async submit() {
      console.log("userQuery in the submit func >>> " + this.userQuery);

      const apiKey = "YOUR API KEY";
      const endpoint = "https://api.openai.com/v1/chat/completions";

      try {
        this.isLoading = true;
        this.isGenerating = true;

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: this.userQuery }],
            stream: true,
          }),
        });

        const reader = response.body
          .pipeThrough(new TextDecoderStream())
          .getReader();

        let tokens = "";
        while (true) {
          var { value, done } = await reader.read();
          if (done) {
            break;
          }

          const chunks = value
            .replaceAll(/^data: /gm, "")
            .split("\n")
            .filter((c) => Boolean(c.length) && c !== "[DONE]")
            .map((c) => JSON.parse(c));

          for (let chunk of chunks) {
            const token = chunk.choices[0].delta.content;
            if (token != undefined) {
              tokens += token;
            }

            this.$emit("chatResponse", tokens);
          }
        }
      } catch (error) {
        console.error("Error : ", error);
      }

      this.isLoading = false;
      this.isGenerating = false;
    },
  },
};
</script>

<style>
.prompt {
  width: 50%;
}

.prompt_wrapper {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
}

#prompt_area {
  resize: none;
}
</style>
