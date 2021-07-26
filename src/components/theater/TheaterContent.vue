<template>
  <div
    class="TheaterContent"
    :style="{
      height: isOpen ? openHeight : closeHeight
    }"
    ref="content">
    <TheaterPrefecture
      v-for="(theaterPrefecture, theaterPrefectureIdx) in data"
      :data="theaterPrefecture"
      :key="'TheaterPrefecture' + theaterPrefectureIdx" />
  </div>
</template>

<script>
import TheaterPrefecture from '@/components/theater/TheaterPrefecture'

export default {
  name: 'TheaterContent',
  props: {
    data: Array
  },
  components: {
    TheaterPrefecture
  },
  mounted: function () {
    this.openHeight = this.$refs.content.clientHeight + 'px'
    this.closeHeight = '0'
  },
  data () {
    return {
      isOpen: false,
      openHeight: 'auto',
      closeHeight: 'auto'
    }
  },
  methods: {
    openClose: function () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
div.TheaterContent {
  overflow: hidden;
}
</style>
