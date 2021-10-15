<template>
  <div>
    <MovieTheaterTab
      :data="data"
      :onClickTab="onClickTab" />
    <MovieTheaterContent
      :data="data"
      ref="movieTheaterContent" />
  </div>
</template>

<script>
import MovieTheaterTab from '@/components/movie/MovieTheaterTab'
import MovieTheaterContent from '@/components/movie/MovieTheaterContent'

export default {
  name: 'MovieTheater',
  props: {
    data: Array
  },
  components: {
    MovieTheaterTab,
    MovieTheaterContent
  },
  methods: {
    onClickTab: function (tabIdx) {
      this.$refs.movieTheaterContent.switchArea(tabIdx)
    }
  }
}
</script>

<style scoped>
</style>
