<template>
  <div>
    <MovieTheaterItemHeader
      :data="headerData"
      :onClick="() => {onClickHeader()}" />
  </div>
</template>

<script>
import MovieTheaterItemHeader from '@/components/movie/MovieTheaterItemHeader'

export default {
  name: 'MovieTheaterItem',
  props: {
    headerData: Object
  },
  components: {
    MovieTheaterItemHeader
  },
  methods: {
    onClickHeader: () => {
    }
  }
}
</script>

<style scoped>
</style>
