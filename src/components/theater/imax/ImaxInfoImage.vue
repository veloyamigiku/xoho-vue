<template>
  <div class="ImaxInfoImageWrap">
    <div class="ImaxInfoImage">
      <div class="ImaxInfoImageTitleWrap">
        <img
          class="ImaxInfoImageTitle"
          :src="data.titleImgUrl"
          alt="ImaxInfoImageTitle" />
      </div>
      <div class="ImaxInfoImageSubTitleWrap">
        <img
          class="ImaxInfoImageSubTitle"
          :src="data.subTitleImgUrl"
          alt="ImaxInfoImageSubTitle" />
      </div>
      <div class="ImaxInfoImageImgWrap">
        <img
          class="ImaxInfoImageImg"
          :src="data.imgUrl"
          alt="ImaxInfoImageImg" />
      </div>
      <div class="ImaxInfoImageTextWrap">
        <img
          class="ImaxInfoImageText"
          :src="data.textImgUrl"
          alt="ImaxInfoImageText" />
      </div>
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
div.ImaxInfoImageWrap {
  border-bottom: 1px solid #404f66;
}

div.ImaxInfoImage {
  max-width: 940px;
  margin: 0 auto;
  text-align: center;
}

div.ImaxInfoImageTitleWrap {
  padding: 38px 0;
}

div.ImaxInfoImageSubTitleWrap {
  padding-bottom: 64px;
}

div.ImaxInfoImageImgWrap {
  padding-bottom: 57px;
}

div.ImaxInfoImageTextWrap {
  padding-bottom: 78px;
}
</style>
