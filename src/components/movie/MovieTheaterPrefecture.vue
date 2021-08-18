<template>
  <div>
    <MovieTheaterItem
      v-for="(movieTheater, movieTheaterIdx) in data.theater"
      :headerData="movieTheaterIdx === 0 ? { ...movieTheater, ...{pref: data.prefecture.name} } : movieTheater"
      :key="'MovieTheaterItem' + movieTheaterIdx" />
  </div>
</template>

<script>
import MovieTheaterItem from '@/components/movie/MovieTheaterItem'

export default {
  name: 'MovieTheaterPrefecture',
  props: {
    data: Object
  },
  components: {
    MovieTheaterItem
  }
}
</script>

<style scoped>
</style>
