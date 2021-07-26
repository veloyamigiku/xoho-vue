<template>
  <div class="Theater">
    <a class="TheaterLink"
      :href="data.url">
      <div class="TheaterName">TOHOシネマズ {{data.name}}</div>
      <div class="TheaterSub">TOHO CINEMAS {{data.sub}}</div>
    </a>
    <div class="TheaterTypeGroup">
      <div
        v-for="(type, typeIdx) in data.type"
        :key="'TheaterType' + typeIdx"
        class="TheaterType">
        <div v-if="type.icon">
          <FontAwesomeIcon
            :icon="type.icon"
            class="TheaterTypeIcon" />
        </div>
        <div class="TheaterTypeName">{{type.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'Theater',
  props: {
    data: Object
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
div.Theater {
  width: calc(100% / 2 - 10px);
  margin-top: 20px;
}

div.Theater:nth-of-type(even) {
  margin-left: 10px;
}

div.Theater:nth-of-type(odd) {
  margin-right: 10px;
}

a.TheaterLink {
  text-decoration: none;
  color: #0d47a1;
  transition-property: color, opacity;
  transition-timing-function: ease;
  transition-duration: .3s;
}

a.TheaterLink:hover {
  color: #b71c1c;
  opacity: .6;
}

div.TheaterName {
  font-weight: 700;
}

div.TheaterSub {
  margin-top: 3px;
  font-size: 8px;
  font-weight: 400;
}

div.TheaterTypeGroup {
  display: flex;
}

div.TheaterType {
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 2px 6px;
  border: 1px solid #0d47a1;
  border-radius: 3px;
}

div.TheaterType:nth-of-type(n+2) {
  margin-left: 5px;
}

.TheaterTypeIcon {
  margin-right: 3px;
  color: #0d47a1;
  font-size: 12px;
}

div.TheaterTypeName {
  color: #0d47a1;
  font-size: 12px;
  font-weight: 700;
}
</style>
