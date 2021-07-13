<template>
  <div>
    <a class="TheaterLink"
      :href="data.url">
      <div class="TheaterName">{{data.name}}</div>
      <div class="TheaterSub">{{data.sub}}</div>
    </a>
    <div>
      <div
        v-for="(type, typeIdx) in data.type"
        :key="'TheaterType' + typeIdx">
        <div v-if="type.icon">
          <FontAwesomeIcon :icon="type.icon" />
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
</style>
