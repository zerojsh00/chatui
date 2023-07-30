<template>
  <v-navigation-drawer floating permanent class="bg-grey-darken-4">
    <v-list density="compact" nav>
      <v-list-item
        v-for="num in 10"
        :key="num.id"
        prepend-icon="mdi-forum"
        title="과거 질문 목록"
        value="과거 질문 목록"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationComponent",
};
</script>
