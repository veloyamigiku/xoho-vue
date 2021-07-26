<template>
  <div
    class="TheaterHeader"
    @click="() => click()">
    <div class="TheaterHeaderTitle">{{data.title}}</div>
    <div class="TheaterHeaderSub">{{data.sub}}</div>
    <div class="TheaterHeaderOption">{{data.option}}</div>
  </div>
</template>

<script>
export default {
  name: 'TheaterHeader',
  props: {
    data: Object,
    click: Function
  }
}
</script>

<style scoped>
div.TheaterHeader {
  padding: 10px;
}

div.TheaterHeaderTitle {
  font-weight: 700;
}

div.TheaterHeaderSub {
  margin-top: 4px;
  color: #616161;
  font-size: 12px;
  font-weight: 400;
}
</style>
