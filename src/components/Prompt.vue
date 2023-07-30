<template>
  <v-textarea
    id="prompt-area"
    prepend-inner-icon="mdi-comment"
    clearable
    clear-icon="mdi-close-circle"
    variant="solo-filled"
    auto-grow
    label="메시지를 입력해주세요."
    model-value="AWS (서울 리전)에서 vCPU 2개 이상을 가진 가상머신 스펙은 무엇인가요?"
  ></v-textarea>
</template>

<script>
export default {
  name: "PromptComponent",
};
</script>

<style>
#prompt-area {
  resize: none;
}
</style>
