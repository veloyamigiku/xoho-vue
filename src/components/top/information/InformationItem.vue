<template>
  <div class="InformationItem">
    <div class="InformationItemImgWrap">
      <img class="InformationItemImg" :src="data.imgUrl" />
    </div>
    <div
      class="InformationItemType"
      :style="{
        color: data.typeColor,
        backgroundColor: data.typeBackColor
      }">{{ data.type }}</div>
    <div
      class="InformationItemContent"
      v-html="data.title" />
  </div>
</template>

<script>
export default {
  name: 'InformationItem',
  props: {
    data: Object
  }
}
</script>

<style scoped>
div.InformationItem {
  width: calc(100% / 4);
  padding-left: 5px;
  padding-right: 5px;
  box-sizing: border-box;
}

div.InformationItemImgWrap {
  /* point1 */
  position: relative;
  width: 100%;
  overflow: hidden;
  /* point2 */
  padding-top: 60%;
}

img.InformationItemImg {
  /* point1 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

div.InformationItemType {
  width: 8em;
  padding-top: 6px;
  padding-bottom: 6px;
  text-align: center;
}

div.InformationItemContent {
  font-size: 14px;
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
}
</style>
