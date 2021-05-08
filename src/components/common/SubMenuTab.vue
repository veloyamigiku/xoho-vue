<template>
  <div class="SubMenuTab">
    <SubMenuTabItem
      v-for="(subMenuTabItem, subMenuTabItemIdx) in data"
      :key="'SubMenuTabItem' + subMenuTabItemIdx"
      :data="subMenuTabItem"
      :active="activeIdx == subMenuTabItemIdx"
      v-on:click.native="clickTab(subMenuTabItemIdx)" />
  </div>
</template>

<script>
import SubMenuTabItem from '@/components/common/SubMenuTabItem'

export default {
  name: 'SubMenuTab',
  props: {
    data: Array,
    activeIdx: Number,
    click: Function
  },
  components: {
    SubMenuTabItem
  },
  methods: {
    clickTab: function (tabIdx) {
      this.click(tabIdx)
    }
  }
}
</script>

<style scoped>
.SubMenuTab {
  display: flex;
}
</style>
