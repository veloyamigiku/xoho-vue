<template>
  <div class="MovieTheaterItemContent">
    <MovieScheduleDate :data="data.date" />
    <MovieScheduleScreen :data="data.screen" />
  </div>
</template>

<script>
import MovieScheduleDate from '@/components/movie/MovieScheduleDate'
import MovieScheduleScreen from '@/components/movie/MovieScheduleScreen'

export default {
  name: 'MovieTheaterItemContent',
  props: {
    data: Object
  },
  components: {
    MovieScheduleDate,
    MovieScheduleScreen
  }
}
</script>

<style scoped>
</style>
