<template>
  <div>
    <TopMenu :data="topMenuData" />
  </div>
</template>

<script>
import axios from 'axios'
import TopMenu from '@/components/common/TopMenu'

export default {
  name: 'Theater',
  components: {
    TopMenu
  },
  data () {
    return {
      topMenuData: []
    }
  },
  mounted () {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=theater&front_type=vue')
      .then(res => {
        this.topMenuData = res.data
      })
  }
}
</script>

<style scoped>
</style>
