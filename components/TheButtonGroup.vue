<template>
  <v-btn-group density="compact" class="mx-2">
    <v-btn
      variant="tonal"
      class="font-weight-bold"
      prepend-icon="mdi-file-outline"
      color="secondary"
      data-testid=""
    >
      テストです。
      <v-badge
        v-if="isNew"
        color="warning"
        content="NEW"
        inline
      />
    </v-btn>
    <v-divider vertical />
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn
          variant="tonal"
          v-bind="props"
          size="x-small"
          color="secondary"
          data-testid="new-order-chevron-down"
        >

          <v-icon size="x-large" icon="$chevronDown" />
        </v-btn>
      </template>
      <v-list>
        <v-list-item link>
          <v-list-item-title  data-testid="ci-medical-new-order-button">
            リストページ
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn-group>
</template>

<script setup lang="ts">
defineProps<{
  /**
   * Newバッジ
   */
  isNew?: boolean
}>()

</script>