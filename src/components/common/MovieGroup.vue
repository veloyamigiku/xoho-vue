<template>
  <div class="MovieGroup">
    <Movie
      v-for="(movie, movieIdx) in data"
      :data="movie"
      :key="'Movie' + movieIdx" />
  </div>
</template>

<script>
import Movie from '@/components/common/Movie'

export default {
  name: 'MovieGroup',
  props: {
    data: Array
  },
  components: {
    Movie
  }
}
</script>

<style scoped>
div.MovieGroup {
  display: flex;
  flex-wrap: wrap;
}
</style>
