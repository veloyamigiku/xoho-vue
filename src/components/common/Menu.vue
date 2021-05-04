<template>
  <div class="Menu">
    <div class="Menu1" v-if="data.menu1">
      <MenuItemA
        v-for="(menuItem, menuItemIdx) in data.menu1"
        :key="'Menu1Item' + menuItemIdx"
        :data="menuItem" />
    </div>
    <SubMenu :data="data.search" />
    <div class="Info">
      <MenuItemB
        v-for="(infoItem, infoItemIdx) in data.info"
        :key="'InfoItem' + infoItemIdx"
        :data="infoItem" />
    </div>
    <div class="Menu2" v-if="data.menu2">
      <MenuItemA
        v-for="(menuItem, menuItemIdx) in data.menu2"
        :key="'Menu2Item' + menuItemIdx"
        :data="menuItem" />
    </div>
  </div>
</template>

<script>
import MenuItemA from '@/components/common/MenuItemA'
import SubMenu from '@/components/common/SubMenu'
import MenuItemB from '@/components/common/MenuItemB'

export default {
  name: 'Menu',
  props: {
    data: Object
  },
  components: {
    MenuItemA,
    SubMenu,
    MenuItemB
  }
}
</script>

<style scoped>
</style>
