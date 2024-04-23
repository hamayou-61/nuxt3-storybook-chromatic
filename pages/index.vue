<template>
  <div>
    <button-group
      :color="colorRef"
      :is-new="isNewRef"
      :main-link="mainLinkReactive"
      :sub-links="subLinksReactive"
    />
    <p>
      テスト<br>テストテストテステスト<br>テストテストテストテスト<br>テストテストテストテスト<br>テストテストテストト
    </p>
  </div>
</template>

<script setup>
const isNewRef = ref(true)
const colorRef = ref('primary')
const mainLinkReactive = {
  label: 'メインリンク',
  url: 'https://www.google.com/'
}
const subLinksReactive = [
  {
    label: 'サブリンク1',
    url: 'https://www.google.com/'
  },
  {
    label: 'サブリンク2',
    url: 'https://www.google.com/'
  }
]

</script>
