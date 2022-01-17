<template>
  <div>
    <div>
      <img
        class="ImaxInfoImageTitle"
        :src="data.titleImgUrl"
        alt="ImaxInfoImageTitle" />
    </div>
    <div>
      <img
        class="ImaxInfoImageSubTitle"
        :src="data.subTitleImgUrl"
        alt="ImaxInfoImageSubTitle" />
    </div>
    <div>
      <img
        class="ImaxInfoImageImg"
        :src="data.imgUrl"
        alt="ImaxInfoImageImg" />
    </div>
    <div>
      <img
        class="ImaxInfoImageText"
        :src="data.textImgUrl"
        alt="ImaxInfoImageText" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImaxInfoImage',
  props: {
    data: Object
  }
}
</script>

<style scoped>
</style>
