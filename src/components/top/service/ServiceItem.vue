<template>
  <div class="ServiceItem">
    <a
      class="ServiceItemLink"
      :href="data.url">
      <div class="ServiceItemContent">
        <div>
          <img
            class="ServiceItemImg"
            :src="data.imgUrl"
            alt="ServiceItemImg" />
        </div>
        <div class="ServiceItemContentRight">
          <div class="ServiceItemTitle">{{ data.title }}</div>
          <div class="ServiceItemSub">{{ data.sub }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    data: Object
  }
}
</script>

<style scoped>
div.ServiceItem {
  margin-top: 20px;
  width: calc(100% / 2);
  box-sizing: border-box;
}

div.ServiceItem:nth-of-type(odd) {
  padding-right: 10px;
}

div.ServiceItem:nth-of-type(even) {
  padding-left: 10px;
}

a.ServiceItemLink {
  color: #212121;
  text-decoration: none;
}

div.ServiceItemContent {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
}

img.ServiceItemImg {
  height: 78px;
}

div.ServiceItemContentRight {
  margin-left: 10px;
}

div.ServiceItemTitle {
  font-weight: 700;
}
</style>
