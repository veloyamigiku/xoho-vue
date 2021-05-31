<template>
  <div>
    <div>
      <ServiceItem
        v-for="(serviceItem, serviceItemIdx) in data.item"
        :data="serviceItem"
        :key="'ServiceItem' + serviceItemIdx" />
    </div>
    <div>
      <ServiceButton
        v-for="(serviceButton, serviceButtonIdx) in data.buttonGroup1"
        :data="serviceButton"
        :key="'ServiceButton1' + serviceButtonIdx" />
    </div>
    <div>
      <ServiceButton
        v-for="(serviceButton, serviceButtonIdx) in data.buttonGroup2"
        :data="serviceButton"
        :key="'ServiceButton2' + serviceButtonIdx" />
    </div>
  </div>
</template>

<script>
import ServiceItem from '@/components/top/service/ServiceItem'
import ServiceButton from '@/components/top/service/ServiceButton'

export default {
  name: 'Service',
  props: {
    data: Object
  },
  components: {
    ServiceItem,
    ServiceButton
  }
}
</script>

<style scoped>
</style>
