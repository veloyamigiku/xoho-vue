<template>
  <div>
    <div class="TheaterHeaderTitle">{{data.title}}</div>
    <div class="TheaterHeaderSub">{{data.sub}}</div>
    <div class="TheaterHeaderOption">{{data.option}}</div>
  </div>
</template>

<script>
export default {
  name: 'TheaterHeader',
  props: {
    data: Object
  }
}
</script>

<style scoped>
</style>
