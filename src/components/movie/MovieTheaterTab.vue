<template>
  <div class="MovieTheaterTab">
    <div
      v-for="(theaterByAreaPrefecture, theaterByAreaPrefectureIdx) in data"
      :class="activeTabIdx === theaterByAreaPrefectureIdx ? 'MovieTheaterTabItemActive' : 'MovieTheaterTabItem'"
      :key="'MovieTheaterTabItem' + theaterByAreaPrefectureIdx"
      @click="() => clickTab(theaterByAreaPrefectureIdx)">
      {{ theaterByAreaPrefecture.area.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieTheaterTab',
  props: {
    data: Array,
    onClickTab: Function
  },
  data () {
    return {
      activeTabIdx: 0
    }
  },
  methods: {
    clickTab: function (tabIdx) {
      this.activeTabIdx = tabIdx
      this.onClickTab(tabIdx)
    }
  }
}
</script>

<style scoped>
div.MovieTheaterTab {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  padding-left: 5px;
  padding-top: 5px;
  padding-right: 5px;
  background-color: #212121;
}

div.MovieTheaterTabItem {
  position: relative;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}

div.MovieTheaterTabItemActive {
  position: relative;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 20px;
  color: #212121;
  background-color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

div.MovieTheaterTabItem:nth-of-type(n+2)::before {
  position: absolute;
  left: -1px;
  top: 10px;
  right: 0;
  bottom: 10px;
  content: '';
  border-left: 1px solid #fff;
}
</style>
