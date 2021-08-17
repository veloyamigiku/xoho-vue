<template>
  <div class="MovieTheaterItem">
    <div
      v-if="data.pref"
      class="MovieTheaterItemPrefecture">
      [{{ data.pref }}]
    </div>
    <div class="MovieTheaterItemGroup">
      <div class="MovieTheaterItemTitle">TOHOシネマズ {{data.name}}</div>
      <FontAwesomeIcon :icon="['fas', 'chevron-down']" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'MovieTheaterItem',
  props: {
    data: Object
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
div.MovieTheaterItem {
  padding: 15px 20px;
}

div.MovieTheaterItem:nth-of-type(n+2) {
  border-top: solid 1px #bdbdbd;
}

div.MovieTheaterItemPrefecture {
  color: #616161;
  font-weight: 700;
}

div.MovieTheaterItemTitle {
  padding: 15px 0;
  font-weight: 700;
  cursor: pointer;
}

div.MovieTheaterItemTitle:hover {
  opacity: .6;
}

div.MovieTheaterItemTitle:nth-of-type(2) {
  margin-top: 10px;
}

</style>
