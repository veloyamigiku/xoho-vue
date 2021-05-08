<template>
  <div class="SubMenu">
    <SubMenuTab
      v-if="data.tab && data.tab.length > 0"
      :data="data.tab"
      :activeIdx="activeIdx"
      :click="(tabIdx) => clickTab(tabIdx)" />
    <div
      class="SubMenuContentWrapper"
      v-if="data.content && data.content.length > 0">
      <SubMenuContent
        v-for="(content, contentIdx) in data.content"
        :key="'SubMenuContent' + contentIdx"
        :data="content"
        :style="{display: activeIdx === contentIdx ? 'block' : 'none'}" />
    </div>
  </div>
</template>

<script>
import SubMenuTab from '@/components/common/SubMenuTab'
import SubMenuContent from '@/components/common/SubMenuContent'

export default {
  name: 'SubMenu',
  props: {
    data: Object
  },
  components: {
    SubMenuTab,
    SubMenuContent
  },
  data () {
    return {
      activeIdx: 0
    }
  },
  methods: {
    clickTab: function (tabIdx) {
      this.activeIdx = tabIdx
    }
  }
}
</script>

<style scoped>
</style>
