<template>
  <div>
    <LargeButton
      v-for="(largeButton, largeButtonIdx) in data"
      :data="largeButton"
      :key="'LargeButton' + largeButtonIdx" />
  </div>
</template>

<script>
import LargeButton from '@/components/common/LargeButton'

export default {
  name: 'LargeButtonContainer',
  props: {
    data: Array
  },
  components: {
    LargeButton
  }
}
</script>

<style scoped>
</style>
