<template>
  <div>
    <div>
      <img
        class="ImaxAboutTitleImg"
        :src="data.titleImgUrl"
        alt="ImaxAboutTitleImg" />
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
