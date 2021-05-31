<template>
  <div>
    <div class="ServiceItemGroup">
      <ServiceItem
        v-for="(serviceItem, serviceItemIdx) in data.item"
        :data="serviceItem"
        :key="'ServiceItem' + serviceItemIdx" />
    </div>
    <div class="ServiceButtonGroup">
      <ServiceButton
        v-for="(serviceButton, serviceButtonIdx) in data.buttonGroup1"
        :data="serviceButton"
        :key="'ServiceButton1' + serviceButtonIdx" />
    </div>
    <div class="ServiceButtonGroup">
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
div.ServiceItemGroup {
  display: flex;
  flex-wrap: wrap;
}

div.ServiceButtonGroup {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

div.ServiceButtonGroup:nth-of-type(n + 2) {
  border-top: 1px solid #e0e0e0;
}
</style>
