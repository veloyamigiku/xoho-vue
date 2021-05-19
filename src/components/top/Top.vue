<template>
  <div class="Top">
    <TopMenu :data="topMenuData" />
    <LoginMenu :data="loginMenuData" />
    <TopBanner :data="topBannerData" />
    <Heading :data="topHeadingData.R" />
    <Heading :data="topHeadingData.I" />
    <Information :data="informationData" />
    <Heading :data="topHeadingData.II" />
    <Heading :data="topHeadingData.S" />
  </div>
</template>

<script>
import axios from 'axios'
import TopMenu from '@/components/common/TopMenu'
import LoginMenu from '@/components/top/login_menu/LoginMenu'
import TopBanner from '@/components/top/top_banner/TopBanner'
import Heading from '@/components/common/Heading'
import { topHeadingData } from '@/components/top/TopHeadingData'
import Information from '@/components/top/information/Information'

export default {
  name: 'Top',
  components: {
    TopMenu,
    LoginMenu,
    TopBanner,
    Heading,
    Information
  },
  data () {
    return {
      topMenuData: [],
      loginMenuData: {},
      topBannerData: [],
      topHeadingData,
      informationData: []
    }
  },
  mounted () {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu')
      .then(res => {
        this.topMenuData = res.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/login_menu')
      .then(res => {
        this.loginMenuData = res.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_banner')
      .then(res => {
        this.topBannerData = res.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/information')
      .then(res => {
        this.informationData = res.data
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
