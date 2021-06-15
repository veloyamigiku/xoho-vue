<template>
  <div>
    <MovieContainerItem
      v-for="(movieContainerItem, movieContainerItemIdx) in data"
      :data="movieContainerItem"
      :key="'MovieContainerItem' + movieContainerItemIdx" />
  </div>
</template>

<script>
import MovieContainerItem from '@/components/common/MovieContainerItem'

export default {
  name: 'MovieContainer',
  props: {
    data: Array
  },
  components: {
    MovieContainerItem
  }
}
</script>

<style scoped>
</style>
