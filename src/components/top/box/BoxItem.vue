<template>
  <div class="BoxItem">
    <div class="BoxItemTitle">{{ data.title }}</div>
    <div class="BoxItemImgWrap">
      <img class="BoxItemImg" :src="data.imgUrl" />
    </div>
    <div class="BoxItemDesc">{{ data.desc }}</div>
    <div class="BoxItemButton">
      <a class="BoxItemButtonLink" :href="data.buttonUrl">
        <div class="BoxItemButtonLinkLabel">{{ data.buttonTitle }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxItem',
  props: {
    data: Object
  }
}
</script>

<style scoped>
div.BoxItem {
  width: calc(100% / 2);
  box-sizing: border-box;
  border: 2px solid #b71c1c;
  border-radius: 4px;
  padding: 28px 30px;
}

div.BoxItem:nth-of-type(even) {
  margin-left: 20px;
}

div.BoxItemTitle {
  font-size: 18px;
  color: #b71c1c;
  text-align: center;
}

div.BoxItemImgWrap {
  margin-top: 20px;
  text-align: center;
}

img.BoxItemImg {
  height: 56px;
}

div.BoxItemDesc {
  margin-top: 16px;
}

div.BoxItemButton {
  margin-top: 30px;
}

a.BoxItemButtonLink {
  text-decoration: none;
}

div.BoxItemButtonLinkLabel {
  padding: 20px 0;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background-color: #b71c1c;
  border: solid 1px #b71c1c;
  border-radius: 4px;
  text-align: center;
  transition-property: background-color, color;
  transition-duration: .3s;
}

div.BoxItemButtonLinkLabel:hover {
  color: #b71c1c;
  background-color: #fff;
}
</style>
