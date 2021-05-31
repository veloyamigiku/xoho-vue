<template>
  <div
    @mouseover="() => isHover = true"
    @mouseout="() => isHover = false">
    <a
      class="ServiceButtonLink"
      :href="data.url">
      <div>
        <div v-if="data.icon">
          <FontAwesomeIcon
            :icon="data.icon"
            :style="{
              color: isHover ? '#fff' : data.titleColor
            }" />
        </div>
        <div
          :style="{
            color: isHover ? '#fff' : data.titleColor
          }">{{ data.title }}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'ServiceButton',
  props: {
    data: Object
  },
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      isHover: false
    }
  }
}
</script>

<style scoped>
</style>
