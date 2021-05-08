<template>
  <div class="SubMenuContent" v-if="data && data.length > 0">
    <MenuItemA
      v-for="(menuItem, menuItemIdx) in data"
      :key="'SubMenuContentItem' + menuItemIdx"
      :data="menuItem" />
  </div>
</template>

<script>
import MenuItemA from '@/components/common/MenuItemA'

export default {
  name: 'SubMenuContent',
  props: {
    data: Array
  },
  components: {
    MenuItemA
  }
}
</script>

<style scoped>
</style>
