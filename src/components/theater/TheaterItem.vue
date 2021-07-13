<template>
  <div class="TheaterItem">
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
div.TheaterItem {
  margin-top: 30px;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
}
</style>
