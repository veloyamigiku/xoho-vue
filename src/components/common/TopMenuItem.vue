<template>
  <div class="TopMenuItem" :style="{width: widthRatio + '%'}">
    <a class="TopMenuItemLink" :href="data.url">
      <div class="TopMenuItemContent">
        <div class="TopMenuItemTitle">{{data.title}}</div>
        <div class="TopMenuItemSub">{{data.sub}}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'TopMenuItem',
  props: {
    data: Object,
    widthRatio: Number
  }
}
</script>

<style scoped>
div.TopMenuItem {
  background-color: #fff;
}

div.TopMenuItem:nth-of-type(n+2) {
  border-left: 1px solid;
  border-image: linear-gradient(to bottom, #fafafa 0%, #e4e4e4 100%);
  border-image-slice: 1;
}

a.TopMenuItemLink {
  color: #424242;
  text-decoration: none;
}

div.TopMenuItemContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}

div.TopMenuItemTitle {
  font-size: 15px;
  font-weight: 700;
}

div.TopMenuItemSub {
  margin-top: 5px;
  font-size: 8px;
  font-weight: 400;
}
</style>
