<template>
  <div>
    <MovieScheduleDate :data="scheduleDateData" />
    <MovieScheduleScreen :data="scheduleScreenData" />
  </div>
</template>

<script>
import MovieScheduleDate from '@/components/movie/MovieScheduleDate'
import MovieScheduleScreen from '@/components/movie/MovieScheduleScreen'

export default {
  name: 'MovieTheaterItemContent',
  props: {
    scheduleDateData: Array,
    scheduleScreenData: Object
  },
  components: {
    MovieScheduleDate,
    MovieScheduleScreen
  }
}
</script>

<style scoped>
</style>
