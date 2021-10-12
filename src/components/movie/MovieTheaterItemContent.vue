<template>
  <div
    class="MovieTheaterItemContent"
    ref="movieTheaterItemContentRef">
    <MovieScheduleDate
      :data="dateData"
      :onClick="() => {onClickDate()}" />
    <MovieScheduleScreen :data="screenData" />
  </div>
</template>

<script>
import axios from 'axios'
import MovieScheduleDate from '@/components/movie/MovieScheduleDate'
import MovieScheduleScreen from '@/components/movie/MovieScheduleScreen'

export default {
  name: 'MovieTheaterItemContent',
  props: {
    data: Object
  },
  components: {
    MovieScheduleDate,
    MovieScheduleScreen
  },
  data () {
    return {
      dateData: [],
      screenData: {},
      screenOpen: false
    }
  },
  updated: function () {
    if (this.screenOpen) {
      this.$refs.movieTheaterItemContentRef.style.height =
        this.$refs.movieTheaterItemContentRef.scrollHeight + 'px'
    }
  },
  methods: {
    onClickDate: function () {
      axios
        .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_screen?year=2021&month=8&day=30&title=竜とそばかすの姫')
        .then(res => {
          this.screenData = res.data
        })
    },
    getMovieScheduleDateScreen: function () {
      if (this.screenOpen) {
        this.screenOpen = false
        this.$refs.movieTheaterItemContentRef.style.height = 0
      } else {
        Promise
          .all([
            axios
              .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_date?year=2021&month=8&day=31'),
            axios
              .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_screen?year=2021&month=8&day=31&title=竜とそばかすの姫')
          ])
          .then(responses => {
            var tmpDateData = null
            var tmpScreenData = null
            responses.forEach(function (res) {
              if (Array.isArray(res.data)) {
                tmpDateData = res.data
              } else if (res.data.year) {
                tmpScreenData = res.data
              }
            })
            this.dateData = tmpDateData
            this.screenData = tmpScreenData
            this.screenOpen = true
          })
          .catch(() => {
            this.dateData = []
            this.screenData = {}
            this.screenOpen = false
          })
      }
    }
  }
}
</script>

<style scoped>
div.MovieTheaterItemContent {
  overflow: hidden;
  height: 0;
  transition-property: height;
  transition-timing-function: ease;
  transition-duration: 0.6s;
}
</style>
