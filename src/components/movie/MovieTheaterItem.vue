<template>
  <div>
    <MovieTheaterItemHeader :data="headerData" />
  </div>
</template>

<script>
import MovieTheaterItemHeader from '@/components/movie/MovieTheaterItemHeader'

export default {
  name: 'MovieTheaterItem',
  props: {
    headerData: Object
  },
  components: {
    MovieTheaterItemHeader
  }
}
</script>

<style scoped>
</style>
