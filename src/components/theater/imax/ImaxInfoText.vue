<template>
  <div>
    <div class="ImaxInfoTextHeader">{{ data.header }}</div>
    <div class="ImaxInfoTextBody">{{ data.body }}</div>
  </div>
</template>

<script>
export default {
  name: 'ImaxInfoText',
  props: {
    data: Object
  }
}
</script>

<style scoped>
</style>
