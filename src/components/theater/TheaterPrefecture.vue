<template>
  <div>
    <div class="TheaterPrefectureName">{{data.name}}</div>
    <div class="TheaterPrefectureSub">{{data.sub}}</div>
    <div>
      <Theater
        v-for="(theater, theaterIdx) in data.theater"
        :data="theater"
        :key="'Theater' + theaterIdx" />
    </div>
  </div>
</template>

<script>
import Theater from '@/components/theater/Theater'

export default {
  name: 'TheaterPrefecture',
  props: {
    data: Object
  },
  components: {
    Theater
  }
}
</script>

<style scoped>
</style>
