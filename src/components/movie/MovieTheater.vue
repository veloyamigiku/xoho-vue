<template>
  <div>
    <MovieTheaterTab :data="data" />
  </div>
</template>

<script>
import MovieTheaterTab from '@/components/movie/MovieTheaterTab'

export default {
  name: 'MovieTheater',
  props: {
    data: Array
  },
  components: {
    MovieTheaterTab
  }
}
</script>

<style scoped>
</style>
