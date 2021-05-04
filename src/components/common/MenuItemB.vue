<template>
  <div class="MenuItemB">
    <a class="MenuItemBLink" :href="data.url">
      <div><FontAwesomeIcon class="MenuItemBIcon" :icon="data.icon" /></div>
      <div class="MenuItemBLabel" v-html="data.label" />
    </a>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'MenuItemB',
  props: {
    data: Object
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.MenuItemB {
  width: calc(50% - 1px);
  border-bottom: solid 1px #383838;
}

.MenuItemB:nth-of-type(1),
.MenuItemB:nth-of-type(2) {
  border-top: solid 1px #383838;
}

.MenuItemB:nth-of-type(even) {
  border-left: solid 1px #383838;
}

.MenuItemBLink {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}

.MenuItemBLink:hover {
  opacity: .4;
}

.MenuItemBIcon {
  font-size: 30px;
  padding-top: 20px;
}

.MenuItemBLabel {
  padding: 15px;
}
</style>
