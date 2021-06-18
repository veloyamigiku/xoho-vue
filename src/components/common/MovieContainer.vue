<template>
  <div>
    <MovieContainerItem
      v-for="(movieContainerItem, movieContainerItemIdx) in data"
      :data="movieContainerItem"
      :key="'MovieContainerItem' + movieContainerItemIdx"
      :ref="'MovieContainerItem' + movieContainerItemIdx" />
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
  },
  methods: {
    scrollToItem: function (dateIdx) {
      this.$refs['MovieContainerItem' + dateIdx][0].scroll()
    }
  }
}
</script>

<style scoped>
</style>
