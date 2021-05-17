<template>
  <div class="TopBannerItem">
    <a class="TopBannerItemLink" :href="data.url">
      <img
        class="TopBannerItemImg"
        :src="data.imgUrl"
        alt="TopBannerItemImg" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'TopBannerItem',
  props: {
    data: Object
  }
}
</script>

<style scoped>
div.TopBannerItem:nth-of-type(odd) {
  margin-right: 20px;
}

img.TopBannerItemImg {
  width: 100%;
}
</style>
