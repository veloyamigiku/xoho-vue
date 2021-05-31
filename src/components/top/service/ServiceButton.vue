<template>
  <div
    class="ServiceButton"
    @mouseover="() => isHover = true"
    @mouseout="() => isHover = false">
    <a
      class="ServiceButtonLink"
      :href="data.url">
      <div
        class="ServiceButtonContent">
        <div v-if="data.icon">
          <FontAwesomeIcon
            :icon="data.icon"
            class="ServiceButtonIcon"
            :style="{
              color: isHover ? '#fff' : data.titleColor
            }" />
        </div>
        <div
          class="ServiceButtonTitle"
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
div.ServiceButton {
  width: 290px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  background-color: #fff;
  transition-property: background-color;
  transition-duration: .3s;
}

div.ServiceButton:hover {
  background-color: #616161;
}

div.ServiceButton:nth-of-type(n + 2) {
  margin-left: 10px;
}

a.ServiceButtonLink {
  font-weight: 700;
  text-decoration: none;
}

div.ServiceButtonContent {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
}

div.ServiceButtonTitle {
  transition-property: color;
  transition-duration: .3s;
}

.ServiceButtonIcon {
  transition-property: color;
  transition-duration: .3s;
}
</style>
