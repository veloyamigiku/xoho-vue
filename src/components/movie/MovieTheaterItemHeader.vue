<template>
  <div class="MovieTheaterItemHeader">
    <div
      v-if="data.pref"
      class="MovieTheaterItemHeaderPrefecture">
      [{{ data.pref }}]
    </div>
    <div
      class="MovieTheaterItemHeaderGroup"
      @click="() => {onClick()}">
      <div class="MovieTheaterItemHeaderTitle">TOHOシネマズ {{data.name}}</div>
      <FontAwesomeIcon class="MovieTheaterItemHeaderIcon" :icon="['fas', 'chevron-down']" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'MovieTheaterItemHeader',
  props: {
    data: Object,
    onClick: Function
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
div.MovieTheaterItemHeader {
  padding: 15px 20px;
}

div.MovieTheaterItemHeader:nth-of-type(n+2) {
  border-top: solid 1px #bdbdbd;
}

div.MovieTheaterItemHeaderPrefecture {
  color: #616161;
  font-weight: 700;
}

div.MovieTheaterItemHeaderGroup {
  display: flex;
  align-items: center;
}

div.MovieTheaterItemHeaderTitle {
  padding: 15px 0;
  font-weight: 700;
  cursor: pointer;
}

div.MovieTheaterItemHeaderTitle:hover {
  opacity: .6;
}

div.MovieTheaterItemHeaderTitle:nth-of-type(2) {
  margin-top: 10px;
}

.MovieTheaterItemHeaderIcon {
  margin-left: auto;
}
</style>
