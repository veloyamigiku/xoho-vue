<template>
  <div class="Box">
    <BoxItem
      v-for="(boxItem, boxItemIdx) in data"
      :data="boxItem"
      :key="'BoxItem' + boxItemIdx" />
  </div>
</template>

<script>
import BoxItem from '@/components/top/box/BoxItem'

export default {
  name: 'Box',
  props: {
    data: Array
  },
  components: {
    BoxItem
  }
}
</script>

<style scoped>
div.Box {
  display: flex;
  margin-top: 40px;
}
</style>
