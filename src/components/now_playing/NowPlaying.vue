<template>
  <div class="NowPlaying">
    <TopMenu :data="topMenuData" />
    <Heading :data="nowPlayingHeadingData.NP" />
    <MovieGroup :data="nowPlayingData" />
    <LargeButtonContainer :data="nowPlayingLargeButtonData" />
  </div>
</template>

<script>
import axios from 'axios'
import TopMenu from '@/components/common/TopMenu'
import Heading from '@/components/common/Heading'
import { nowPlayingHeadingData } from '@/components/now_playing/NowPlayingHeadingData'
import MovieGroup from '@/components/common/MovieGroup'
import LargeButtonContainer from '@/components/common/LargeButtonContainer'

export default {
  name: 'NowPlaying',
  components: {
    TopMenu,
    Heading,
    MovieGroup,
    LargeButtonContainer
  },
  data () {
    return {
      topMenuData: [],
      nowPlayingHeadingData,
      nowPlayingData: [],
      nowPlayingLargeButtonData: []
    }
  },
  mounted () {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=now_playing&front_type=vue')
      .then(res => {
        this.topMenuData = res.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/now_playing?front_type=vue')
      .then(res => {
        this.nowPlayingData = res.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=vue&page_type=now_playing')
      .then(res => {
        this.nowPlayingLargeButtonData = res.data
      })
  }
}
</script>

<style scoped>
div.NowPlaying {
  width: calc(100% - 200px);
  margin: 0 auto;
}
</style>
