<template>
  <div class="Theater">
    <TopMenu :data="topMenuData" />
    <Heading :data="headingData.NH" />
    <Heading :data="headingData.PBTT" />
    <TheaterHeading :data="theaterHeadingData.TL" />
    <TheaterHeading :data="theaterHeadingData.FBTL" />
    <div class="TheaterInfo">
      全劇場のお問い合わせ電話番号一覧は<a href="/theater">こちら</a>
    </div>
    <LargeButtonContainer :data="largeButtonData" />
  </div>
</template>

<script>
import axios from 'axios'
import TopMenu from '@/components/common/TopMenu'
import Heading from '@/components/common/Heading'
import { headingData } from '@/components/theater/HeadingData'
import TheaterHeading from '@/components/theater/TheaterHeading'
import { theaterHeadingData } from '@/components/theater/TheaterHeadingData'
import LargeButtonContainer from '@/components/common/LargeButtonContainer'

export default {
  name: 'Theater',
  components: {
    TopMenu,
    Heading,
    TheaterHeading,
    LargeButtonContainer
  },
  data () {
    return {
      topMenuData: [],
      headingData,
      theaterHeadingData,
      largeButtonData: []
    }
  },
  mounted () {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=theater&front_type=vue')
      .then(res => {
        this.topMenuData = res.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=vue&page_type=theater')
      .then(res => {
        this.largeButtonData = res.data
      })
  }
}
</script>

<style scoped>
div.Theater {
  width: calc(100% - 200px);
  margin: 0 auto;
}

div.TheaterInfo {
  margin-top: 40px;
  text-align: center;
}

div.TheaterInfo a {
  text-decoration: none;
  color: #0d47a1;
}

div.TheaterInfo a:hover {
  color: #b71c1c;
}
</style>
