<template>
  <div>
    <MovieSummary :data="movieData" />
  </div>
</template>

<script>
import axios from 'axios'
import MovieSummary from '@/components/movie/MovieSummary'

export default {
  name: 'MovieTop',
  components: {
    MovieSummary
  },
  data () {
    return {
      movieData: {}
    }
  },
  mounted () {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_info')
      .then(res => {
        this.movieData = res.data
      })
  }
}
</script>

<style scoped>
</style>
