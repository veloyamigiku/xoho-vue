<template>
  <div>
    <MovieTheaterItemHeader :data="data" />
  </div>
</template>

<script>
import MovieTheaterItemHeader from '@/components/movie/MovieTheaterItemHeader'

export default {
  name: 'MovieTheaterItem',
  props: {
    data: Object
  },
  components: {
    MovieTheaterItemHeader
  }
}
</script>

<style scoped>
</style>
