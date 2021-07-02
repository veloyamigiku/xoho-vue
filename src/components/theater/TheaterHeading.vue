<template>
  <div class="TheaterHeading">
    <div class="TheaterHeadingTitle">{{ data.title }}</div>
    <div class="TheaterHeadingSub">{{ data.sub }}</div>
  </div>
</template>

<script>
export default {
  name: 'TheaterHeading',
  props: {
    data: Object
  }
}
</script>

<style scoped>
div.TheaterHeading {
  margin-top: 50px;
  padding: 10px 20px;
  background-color: #424242;
}

div.TheaterHeadingTitle {
  font-size: 18px;
  color: #fff;
}

div.TheaterHeadingSub {
  margin-top: 10px;
  font-size: 8px;
  color: #fff;
}
</style>
