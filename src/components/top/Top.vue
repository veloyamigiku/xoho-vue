<template>
  <div class="Top">
    <TopMenu :data="topMenuData" />
  </div>
</template>

<script>
import axios from 'axios'
import TopMenu from '@/components/common/TopMenu'

export default {
  name: 'Top',
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
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu')
      .then(res => {
        this.topMenuData = res.data
      })
  }
}
</script>

<style scoped>
div.Top {
  width: calc(100% - 200px);
  margin: 0 auto;
}
</style>
