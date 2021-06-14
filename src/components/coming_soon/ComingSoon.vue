<template>
  <div class="ComingSoon">
    <TopMenu :data="topMenuData" />
    <Heading :data="comingSoonHeadingData.CS" />
    <LargeButtonContainer :data="comingSoonLargeButtonData" />
  </div>
</template>

<script>
import TopMenu from '@/components/common/TopMenu'
import axios from 'axios'
import Heading from '@/components/common/Heading'
import { comingSoonHeadingData } from '@/components/coming_soon/ComingSoonHeadingData'
import LargeButtonContainer from '@/components/common/LargeButtonContainer'

export default {
  name: 'ComingSoon',
  components: {
    TopMenu,
    Heading,
    LargeButtonContainer
  },
  data () {
    return {
      topMenuData: [],
      comingSoonHeadingData,
      comingSoonLargeButtonData: []
    }
  },
  mounted () {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=coming_soon&front_type=vue')
      .then(res => {
        this.topMenuData = res.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=vue&page_type=coming_soon')
      .then(res => {
        this.comingSoonLargeButtonData = res.data
      })
  }
}
</script>

<style scoped>
div.ComingSoon {
  width: calc(100% - 200px);
  margin: 0 auto;
}
</style>
