<template>
  <div>
    <MovieTheaterItemHeader
      :data="headerData"
      :onClick="() => {onClickHeader()}" />
    <MovieTheaterItemContent
      :scheduleDateData="[]"
      :scheduleScreenData="{}" />
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
    onClickHeader: () => {
    }
  }
}
</script>

<style scoped>
</style>
