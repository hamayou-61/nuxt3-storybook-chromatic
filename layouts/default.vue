<template>
  <v-app>
    <the-header :user="user" />

    <slot />
  </v-app>
</template>

<script setup>
import { reactive } from 'vue'
const user = reactive({
  name: 'Jane Doe'
})

</script>
