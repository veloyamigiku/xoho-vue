<template>
  <div>
    <TheaterItem
      v-for="(theaterItem, theaterItemIdx) in data"
      :key="'ThtaterItem' + theaterItemIdx"
      :data="theaterItem" />
  </div>
</template>

<script>
import TheaterItem from '@/components/theater/TheaterItem'

export default {
  name: 'TheaterContainer',
  props: {
    data: Array
  },
  components: {
    TheaterItem
  }
}
</script>

<style scoped>
</style>
