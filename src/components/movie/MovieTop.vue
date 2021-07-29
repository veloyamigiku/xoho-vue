<template>
  <div class="MovieTop">
    <MovieSummary :data="movieData" />
    <MovieHeading :data="movieHeadingData.NPS" />
  </div>
</template>

<script>
import axios from 'axios'
import MovieSummary from '@/components/movie/MovieSummary'
import MovieHeading from '@/components/movie/MovieHeading'
import { movieHeadingData } from '@/components/movie/MovieHeadingData'

export default {
  name: 'MovieTop',
  components: {
    MovieSummary,
    MovieHeading
  },
  data () {
    return {
      movieData: {},
      movieHeadingData
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
div.MovieTop {
width: calc(100% - 200px);
  margin: 0 auto;
}
</style>
