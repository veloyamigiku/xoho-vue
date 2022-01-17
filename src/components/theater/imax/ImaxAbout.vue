<template>
  <div>
    <div>
      <img
        class="ImaxAboutTitleImg"
        :src="data.titleImgUrl"
        alt="ImaxAboutTitleImg" />
    </div>
    <div>
      <img
        class="ImaxAboutImg"
        :src="data.imgUrl"
        alt="ImaxAboutImg" />
    </div>
    <div>
      <img
        class="ImaxAboutTextImg"
        :src="data.textImgUrl"
        alt="ImaxAboutTextImg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImaxAbout',
  props: {
    data: Object
  }
}
</script>

<style scoped>
</style>
