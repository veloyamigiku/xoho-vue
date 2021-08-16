<template>
  <div>
    <MovieTheaterArea
      v-for="(movieTheaterArea, movieTheaterAreaIdx) in data"
      :key="'MovieTheaterArea' + movieTheaterAreaIdx"
      :data="movieTheaterArea.prefectures" />
  </div>
</template>

<script>
import MovieTheaterArea from '@/components/movie/MovieTheaterArea'

export default {
  name: 'MovieTheaterContent',
  props: {
    data: Array
  },
  components: {
    MovieTheaterArea
  }
}
</script>

<style scoped>
</style>
