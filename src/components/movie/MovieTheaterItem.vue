<template>
  <div>
    <MovieTheaterItemHeader
      :data="headerData"
      :onClick="() => {onClickHeader()}" />
    <MovieTheaterItemContent ref="movieTheaterItemContentRef" />
  </div>
</template>

<script>
import MovieTheaterItemHeader from '@/components/movie/MovieTheaterItemHeader'
import MovieTheaterItemContent from '@/components/movie/MovieTheaterItemContent'

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
      this.$refs.movieTheaterItemContentRef.getMovieScheduleDateScreen()
    }
  }
}
</script>

<style scoped>
</style>
