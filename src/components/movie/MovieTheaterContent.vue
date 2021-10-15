<template>
  <div class="MovieTheaterContent">
    <div
      v-for="(movieTheaterArea, movieTheaterAreaIdx) in data"
      :key="'MovieTheaterArea' + movieTheaterAreaIdx"
      :style="activeAreaTabIdx === movieTheaterAreaIdx ? {display: 'block'} : {display: 'none'}">
      <MovieTheaterArea :data="movieTheaterArea.prefectures" />
    </div>
  </div>
</template>

<script>
import MovieTheaterArea from '@/components/movie/MovieTheaterArea'

export default {
  name: 'MovieTheaterContent',
  props: {
    data: Array
  },
  components: {
    MovieTheaterArea
  },
  data () {
    return {
      activeAreaTabIdx: 0
    }
  },
  methods: {
    switchArea: function (activeAreaTabIdx) {
      this.activeAreaTabIdx = activeAreaTabIdx
    }
  }
}
</script>

<style scoped>
div.MovieTheaterContent {
  background-color: #fff;
}
</style>
