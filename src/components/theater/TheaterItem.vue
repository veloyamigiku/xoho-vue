<template>
  <div class="TheaterItem">
    <TheaterHeader
      :data="data.header"
      :click="() => openCloseContent()" />
    <TheaterContent
      :data="data.prefecture"
      ref="content" />
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
  },
  methods: {
    openCloseContent: function () {
      this.$refs.content.openClose()
    }
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
