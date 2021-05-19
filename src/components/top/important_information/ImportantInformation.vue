<template>
  <div class="ImportantInformation">
    <ImportantInformationItem
      v-for="(importantInformationItem, importantInformationItemIdx) in data"
      :data="importantInformationItem"
      :key="importantInformationItemIdx" />
  </div>
</template>

<script>
import ImportantInformationItem from '@/components/top/important_information/ImportantInformationItem'

export default {
  name: 'ImportantInformation',
  props: {
    data: Array
  },
  components: {
    ImportantInformationItem
  }
}
</script>

<style scoped>
div.ImportantInformation {
  margin-top: 10px;
  padding: 20px;
  background-color: #fff;
}
</style>
