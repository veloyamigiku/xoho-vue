<template>
  <div v-if="data.length > 0">
    <MovieTheaterPrefecture
      v-for="(movieTheaterPrefecture, movieTheaterPrefectureIdx) in data"
      :key="'MovieTheaterPrefecture' + movieTheaterPrefectureIdx"
      :data="movieTheaterPrefecture" />
  </div>
  <div v-else>
    <div class="MovieTheaterNoPrefecture">この地域では上映中の劇場はありません。</div>
  </div>
</template>

<script>
import MovieTheaterPrefecture from '@/components/movie/MovieTheaterPrefecture'

export default {
  name: 'MovieTheaterArea',
  props: {
    data: Array
  },
  components: {
    MovieTheaterPrefecture
  }
}
</script>

<style scoped>
div.MovieTheaterNoPrefecture {
  padding: 40px 20px;
  font-weight: 400;
}
</style>
