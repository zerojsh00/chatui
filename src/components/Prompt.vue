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
        model-value="repeat after me, Hello World !"
        @keypress.enter.exact.prevent="handleChange($event)"
      ></v-textarea>
    </v-container>
  </div>
</template>

<script>
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
        this.submit($event);
      }
    },

    async submit() {
      try {
        this.isLoading = true;
        this.isGenerating = true;

        const response = await fetch("/chat/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: this.userQuery,
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
          console.log(value);

          tokens += value;

          this.$emit("chatResponse", tokens);
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
