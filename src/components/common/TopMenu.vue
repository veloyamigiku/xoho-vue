<template>
  <div class="TopMenu">
    <TopMenuItem
      v-for="(topMenuItem, topMenuItemIdx) in data"
      :data="topMenuItem"
      :widthRatio="100 / data.length"
      :key="'TopMenuItem' + topMenuItemIdx" />
  </div>
</template>

<script>
import TopMenuItem from '@/components/common/TopMenuItem'

export default {
  name: 'TopMenu',
  props: {
    data: Array
  },
  components: {
    TopMenuItem
  }
}
</script>

<style scoped>
div.TopMenu {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  border-bottom: 4px solid #bdbdbd;
}
</style>
