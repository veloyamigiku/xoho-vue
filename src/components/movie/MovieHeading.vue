<template>
  <div class="MovieHeading">
    <div class="MovieHeadingTitle">{{ data.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'MovieHeading',
  props: {
    data: Object
  }
}
</script>

<style scoped>
div.MovieHeading {
  margin-top: 50px;
  padding: 10px 20px;
  background: linear-gradient(160deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.15) 100%);
  background-color: #424242;
}

div.MovieHeadingTitle {
  color: #fff;
  font-size: 18px;
}
</style>
