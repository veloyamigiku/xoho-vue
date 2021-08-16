<template>
  <div>
    <MovieTheaterPrefecture
    v-for="(movieTheaterPrefecture, movieTheaterPrefectureIdx) in data"
    :key="'MovieTheaterPrefecture' + movieTheaterPrefectureIdx"
    :data="movieTheaterPrefecture" />
  </div>
</template>

<script>
import MovieTheaterPrefecture from '@/components/movie/MovieTheaterPrefecture'

export default {
  name: 'MovieTheaterArea',
  props: {
    data: Array
  },
  components: {
    MovieTheaterPrefecture
  }
}
</script>

<style scoped>
</style>
