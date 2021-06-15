<template>
  <div class="MovieContainerItem">
    <MovieHeader :data="data" />
    <MovieGroup :data="data.movie" />
  </div>
</template>

<script>
import MovieHeader from '@/components/common/MovieHeader'
import MovieGroup from '@/components/common/MovieGroup'

export default {
  name: 'MovieContainerItem',
  props: {
    data: Object
  },
  components: {
    MovieHeader,
    MovieGroup
  }
}
</script>

<style scoped>
div.MovieContainerItem {
  margin-top: 20px;
}
</style>
