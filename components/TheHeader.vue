<template>
  <v-app-bar :elevation="2">
    <template #prepend>
      <v-app-bar-nav-icon />
    </template>
    <v-app-bar-title>Application Bar</v-app-bar-title>

    <template v-if="user">
      {{ user.name }}
    </template>
    <template v-else>
      ログインする
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * ユーザー名
   */
  user: { name: string }
}>()
</script>
