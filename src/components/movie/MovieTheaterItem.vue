<template>
  <div>
    <div
      v-if="data.pref"
      class="MovieTheaterItemPrefecture">
      {{ data.pref }}
    </div>
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
