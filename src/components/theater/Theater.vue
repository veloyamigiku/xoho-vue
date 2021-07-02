<template>
  <div class="Theater">
    <TopMenu :data="topMenuData" />
    <Heading :data="theaterHeadingData.NH" />
    <Heading :data="theaterHeadingData.PBTT" />
  </div>
</template>

<script>
import axios from 'axios'
import TopMenu from '@/components/common/TopMenu'
import Heading from '@/components/common/Heading'
import { theaterHeadingData } from '@/components/theater/TheaterHeadingData'

export default {
  name: 'Theater',
  components: {
    TopMenu,
    Heading
  },
  data () {
    return {
      topMenuData: [],
      theaterHeadingData
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
div.Theater {
  width: calc(100% - 200px);
  margin: 0 auto;
}
</style>
