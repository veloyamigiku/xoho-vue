<template>
  <div>
    <MovieTheaterItemHeader
      :data="headerData"
      :onClick="() => {onClickHeader()}" />
    <div class="MovieTheaterItemContentWrap" ref="wrap">
      <MovieTheaterItemContent :data="contentData" />
    </div>
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
      this.contentOpen = !this.contentOpen
      console.log(this.contentOpen)
      if (this.contentOpen) {
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
              console.log(res)
              if (Array.isArray(res.data)) {
                rs.date = res.data
              } else if (res.data.year) {
                rs.screen = res.data
              }
            })
            this.contentData = rs
          })
          .catch(() => {
            this.contentOpen = !this.contentOpen
          })
      } else {
        this.$refs.wrap.style.height = 0
      }
    }
  },
  updated: function () {
    if (this.contentOpen) {
      this.$refs.wrap.style.height = 'auto'
      var contentHeight
      const contentHeight1 = this.$refs.wrap.clientHeight
      this.$refs.wrap.style.height = 0
      const contentHeight2 = this.$refs.wrap.clientHeight
      contentHeight = contentHeight2
      contentHeight = contentHeight1
      this.$refs.wrap.style.height = contentHeight + 'px'
    }
  },
  data: function () {
    return {
      contentOpen: false,
      contentData: {
        date: [],
        screen: {}
      }
    }
  }
}
</script>

<style scoped>
div.MovieTheaterItemContentWrap {
  overflow: hidden;
  height: 0;
  transition-property: height;
  transition-timing-function: ease;
  transition-duration: 0.6s;
}
</style>
