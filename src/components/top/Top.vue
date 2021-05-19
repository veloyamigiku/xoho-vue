<template>
  <div class="Top">
    <TopMenu :data="topMenuData" />
    <LoginMenu :data="loginMenuData" />
    <TopBanner :data="topBannerData" />
    <Heading :data="topHeadingData.R" />
    <Heading :data="topHeadingData.I" />
    <Information :data="informationData" />
    <Heading :data="topHeadingData.II" />
    <ImportantInformation :data="importantInformationData" />
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
import ImportantInformation from '@/components/top/important_information/ImportantInformation'

export default {
  name: 'Top',
  components: {
    TopMenu,
    LoginMenu,
    TopBanner,
    Heading,
    Information,
    ImportantInformation
  },
  data () {
    return {
      topMenuData: [],
      loginMenuData: {},
      topBannerData: [],
      topHeadingData,
      informationData: [],
      importantInformationData: []
    }
  },
  mounted () {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?front_type=vue')
      .then(res => {
        this.topMenuData = res.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/login_menu?front_type=vue')
      .then(res => {
        this.loginMenuData = res.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_banner?front_type=vue')
      .then(res => {
        this.topBannerData = res.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/information?front_type=vue')
      .then(res => {
        this.informationData = res.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/important_information?front_type=vue')
      .then(res => {
        this.importantInformationData = res.data
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
