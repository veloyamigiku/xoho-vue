<template>
  <div>
    <MovieTheaterItemHeader
      :data="headerData"
      :onClick="() => {onClickHeader()}" />
    <MovieTheaterItemContent
      :scheduleDateData="movieScheduleDateData"
      :scheduleScreenData="movieScheduleScreenData" />
  </div>
</template>

<script>
import MovieTheaterItemHeader from '@/components/movie/MovieTheaterItemHeader'
import MovieTheaterItemContent from '@/components/movie/MovieTheaterItemContent'
import axios from 'axios'

export default {
  name: 'MovieTheaterItem',
  props: {
    headerData: Object
  },
  components: {
    MovieTheaterItemHeader,
    MovieTheaterItemContent
  },
  methods: {
    onClickHeader: function () {
      axios
        .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_date?year=2021&month=8&day=31')
        .then(res => {
          this.movieScheduleDateData = res.data
        })
      axios
        .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_screen?year=2021&month=8&day=31&title=竜とそばかすの姫')
        .then(res => {
          this.movieScheduleScreenData = res.data
        })
    }
  },
  data () {
    return {
      movieScheduleDateData: [],
      movieScheduleScreenData: {}
    }
  }
}
</script>

<style scoped>
</style>
