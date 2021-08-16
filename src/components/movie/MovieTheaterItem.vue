<template>
  <div>
    <div class="MovieTheaterItemTitle">TOHOシネマズ {{data.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'MovieTheaterItem',
  props: {
    data: Object
  }
}
</script>

<style scoped>
</style>
