<template>
  <div
    class="MovieContainerItem"
    ref="MovieContainerItem">
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
  },
  methods: {
    scroll: function () {
      document.getElementById('contents').scrollTo(
        {
          top: this.$refs.MovieContainerItem.getBoundingClientRect().top - document.getElementById('contents').getBoundingClientRect().top,
          left: 0,
          behavior: 'smooth'
        })
    }
  }
}
</script>

<style scoped>
div.MovieContainerItem {
  margin-top: 20px;
}
</style>
