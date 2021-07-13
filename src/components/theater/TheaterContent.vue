<template>
  <div>
    <TheaterPrefecture
      v-for="(theaterPrefecture, theaterPrefectureIdx) in data"
      :data="theaterPrefecture"
      :key="'TheaterPrefecture' + theaterPrefectureIdx" />
  </div>
</template>

<script>
import TheaterPrefecture from '@/components/theater/TheaterPrefecture'

export default {
  name: 'TheaterContent',
  props: {
    data: Array
  },
  components: {
    TheaterPrefecture
  }
}
</script>

<style scoped>
</style>
