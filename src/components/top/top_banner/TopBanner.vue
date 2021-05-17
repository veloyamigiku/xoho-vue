<template>
  <div class="TopBanner" v-if="data && data.length > 0">
    <TopBannerItem
      v-for="(topBannerItem, topBannerItemIdx) in data"
      :data="topBannerItem"
      :key="'TopBannerItem' + topBannerItemIdx" />
  </div>
</template>

<script>
import TopBannerItem from '@/components/top/top_banner/TopBannerItem'

export default {
  name: 'TopBanner',
  props: {
    data: Array
  },
  components: {
    TopBannerItem
  }
}
</script>

<style scoped>
div.TopBanner {
  display: flex;
  margin-top: 40px;
}
</style>
