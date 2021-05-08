<template>
  <div class="SubMenuTabItem" :data-active="active ? 1 : 0">
    <div><FontAwesomeIcon class="SubMenuTabItemIcon" :icon="data.icon" /></div>
    <div class="SubMenuTabItemLabel" v-html="data.label" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'SubMenuTabItem',
  props: {
    data: Object,
    active: Boolean
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
/* cursor, opacity, background-color */
.SubMenuTabItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(50% - 1px);
  border-bottom: solid 1px #383838;
}

[class="SubMenuTabItem"][data-active="0"] {
  background-color: #424242;
  cursor: pointer;
}

[class="SubMenuTabItem"][data-active="0"]:hover {
  opacity: .4;
}

.SubMenuTabItem:nth-of-type(1),
.SubMenuTabItem:nth-of-type(2) {
  border-top: solid 1px #383838;
}

.SubMenuTabItem:nth-of-type(even) {
  border-left: solid 1px #383838;
}

.SubMenuTabItemIcon {
  padding-top: 20px;
  color: #fff;
  font-size: 30px;
}

.SubMenuTabItemLabel {
  padding: 15px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
}
</style>
