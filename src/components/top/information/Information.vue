<template>
  <div class="Information">
    <InformationItem
      v-for="(info, infoIdx) in data"
      :data="info"
      :key="'InformationItem' + infoIdx" />
  </div>
</template>

<script>
import InformationItem from '@/components/top/information/InformationItem'

export default {
  name: 'Information',
  props: {
    data: Array
  },
  components: {
    InformationItem
  }
}
</script>

<style scoped>
div.Information {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>
