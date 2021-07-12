<template>
  <div>
    <TheaterHeader :data="data.header" />
    <TheaterContent :data="data.prefecture" />
  </div>
</template>

<script>
import TheaterHeader from '@/components/theater/TheaterHeader'
import TheaterContent from '@/components/theater/TheaterContent'

export default {
  name: 'TheaterItem',
  props: {
    data: Object
  },
  components: {
    TheaterHeader,
    TheaterContent
  }
}
</script>

<style scoped>
</style>
