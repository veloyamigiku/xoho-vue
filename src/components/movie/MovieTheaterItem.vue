<template>
  <div>
    <MovieTheaterItemHeader
      :data="headerData"
      :onClick="() => {onClickHeader()}" />
    <MovieTheaterItemContent :data="contentData" />
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
      Promise
        .all([
          axios
            .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_date?year=2021&month=8&day=31'),
          axios
            .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_screen?year=2021&month=8&day=31&title=竜とそばかすの姫')
        ])
        .then(responses => {
          var rs = {}
          responses.forEach(function (res) {
            if (Array.isArray(res.data)) {
              rs.date = res.data
            } else if (res.data.year) {
              rs.screen = res.data
            }
          })
          this.contentData = rs
        })
    }
  },
  data () {
    return {
      contentData: {
        date: [],
        screen: {}
      }
    }
  }
}
</script>

<style scoped>
</style>
