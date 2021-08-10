<template>
  <div class="MovieTop">
    <MovieSummary :data="movieData" />
    <MovieHeading :data="movieHeadingData.NPS" />
    <Heading :data="headingData.NH" />
    <Heading :data="headingData.PBTT" />
    <Heading :data="headingData.TLIS" />
    <MovieTheater :data="movieData.theater" />
    <LargeButtonContainer :data="movieLargeButtonData" />
  </div>
</template>

<script>
import axios from 'axios'
import MovieSummary from '@/components/movie/MovieSummary'
import MovieHeading from '@/components/movie/MovieHeading'
import { movieHeadingData } from '@/components/movie/MovieHeadingData'
import Heading from '@/components/common/Heading'
import { headingData } from '@/components/movie/HeadingData'
import LargeButtonContainer from '@/components/common/LargeButtonContainer'
import MovieTheater from '@/components/movie/MovieTheater'

export default {
  name: 'MovieTop',
  components: {
    MovieSummary,
    MovieHeading,
    Heading,
    LargeButtonContainer,
    MovieTheater
  },
  data () {
    return {
      movieData: {},
      movieHeadingData,
      headingData,
      movieLargeButtonData: []
    }
  },
  mounted () {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_info')
      .then(res => {
        this.movieData = res.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=vue&page_type=movie')
      .then(res => {
        this.movieLargeButtonData = res.data
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
