<template>
  <v-btn-group density="compact" class="mx-2">
    <v-btn
      variant="tonal"
      class="font-weight-bold"
      prepend-icon="$fileOutline"
      :color="color"
      :href="mainLink.url"
    >テスト
      {{ mainLink.label }}
      <v-badge
        v-if="isNew"
        color="warning"
        content="NEW"
        inline
      />
    </v-btn>
    <v-divider vertical />
    <v-menu :close-on-content-click="false">
      <template #activator="{ props }">
        <v-btn
          variant="tonal"
          v-bind="props"
          size="x-small"
          :color="color"
        >
          <v-icon size="x-large" icon="$chevronDown" />
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(subLink,index) in subLinks" :key="index">
          <v-list-item-title :href="subLink.url">
            {{ subLink.label }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn-group>
</template>

<script setup lang="ts">

type Link = {
  label?: string;
  url?: string;
};

defineProps<{

  /**
   * Newバッジ
   */
  isNew?: boolean

  /**
   * ボタンの色 'primary' | 'secondary' | 'default'
   */
  color?: 'primary' | 'secondary' | 'default'

  /**
   * ボタンの表示ラベルとリンク
   */
  mainLink: Link
  subLinks: Link[]
}>()

</script>
