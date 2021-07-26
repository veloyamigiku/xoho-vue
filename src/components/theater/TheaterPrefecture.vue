<template>
  <div class="TheaterPrefecture">
    <div class="TheaterPrefectureName">{{data.name}}</div>
    <div class="TheaterPrefectureSub">{{data.sub}}</div>
    <div class="TheaterGroup">
      <Theater
        v-for="(theater, theaterIdx) in data.theater"
        :data="theater"
        :key="'Theater' + theaterIdx" />
    </div>
  </div>
</template>

<script>
import Theater from '@/components/theater/Theater'

export default {
  name: 'TheaterPrefecture',
  props: {
    data: Object
  },
  components: {
    Theater
  }
}
</script>

<style scoped>
div.TheaterPrefecture {
  padding: 20px 10px;
  border-top: 1px solid #dcdcdc;
}

div.TheaterPrefectureName {
  color: #616161;
  font-weight: 700;
}

div.TheaterPrefectureSub {
  color: #616161;
  font-size: 8px;
  font-weight: 400;
}

div.TheaterGroup {
  display: flex;
  flex-wrap: wrap;
}
</style>
