<template>
  <v-app>
    <the-header :user="user" />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import { reactive } from 'vue'

const user = reactive({
  name: 'Jane Doe'
})

</script>
