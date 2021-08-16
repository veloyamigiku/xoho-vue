<template>
  <div>
    <MovieTheaterTab :data="data" />
    <MovieTheaterContent :data="data" />
  </div>
</template>

<script>
import MovieTheaterTab from '@/components/movie/MovieTheaterTab'
import MovieTheaterContent from '@/components/movie/MovieTheaterContent'

export default {
  name: 'MovieTheater',
  props: {
    data: Array
  },
  components: {
    MovieTheaterTab,
    MovieTheaterContent
  }
}
</script>

<style scoped>
</style>
