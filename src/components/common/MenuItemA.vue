<template>
  <div class="MenuItemA">
    <a class="MenuItemALink" :href="data.url">
      <div><FontAwesomeIcon class="MenuItemAIcon" :icon="data.icon" /></div>
      <div>{{ data.label }}</div>
    </a>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'MenuItemA',
  props: {
    data: Object
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.MenuItemALink {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}

.MenuItemALink:hover {
  opacity: .4;
}

.MenuItemAIcon {
  margin: 20px;
  font-size: 25px;
  font-style: normal;
}
</style>
