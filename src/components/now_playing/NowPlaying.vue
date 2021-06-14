<template>
  <div class="NowPlaying">
    <TopMenu :data="topMenuData" />
    <Heading :data="nowPlayingHeadingData.NP" />
    <MovieGroup :data="nowPlayingData" />
  </div>
</template>

<script>
import axios from 'axios'
import TopMenu from '@/components/common/TopMenu'
import Heading from '@/components/common/Heading'
import { nowPlayingHeadingData } from '@/components/now_playing/NowPlayingHeadingData'
import MovieGroup from '@/components/common/MovieGroup'

export default {
  name: 'NowPlaying',
  components: {
    TopMenu,
    Heading,
    MovieGroup
  },
  data () {
    return {
      topMenuData: [],
      nowPlayingHeadingData,
      nowPlayingData: []
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
  }
}
</script>

<style scoped>
div.NowPlaying {
  width: calc(100% - 200px);
  margin: 0 auto;
}
</style>
