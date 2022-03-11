<template>
  <div class="ImaxContent">
    <ImaxTheater :data="imaxLaserTheaterData" />
    <ImaxTheater :data="imaxDigitalTheaterData" />
    <ImaxMovie :data="imaxMovieData" />
    <ImaxAbout :data="imaxLaserAboutData" />
    <ImaxAbout :data="imaxDigitalAboutData" />
  </div>
</template>

<script>
import ImaxTheater from '@/components/theater/imax/ImaxTheater'
import { getTheaters } from '@/components/theater/imax/ImaxUtils'
import ImaxAbout from '@/components/theater/imax/ImaxAbout'
import ImaxMovie from '@/components/theater/imax/ImaxMovie'
import { ranking } from '@/components/top/ranking/rankingData'

export default {
  name: 'ImaxContent',
  props: {
    data: Object
  },
  data () {
    return {
      imaxLaserTheaterData: {
        imaxType: 6,
        introImgUrl: this.data.topData.lasertIntroImgUrl,
        theater: getTheaters(this.data.theaterData[6]),
        theaterAbout: {
          title: 'IMAX®レーザーとは'
        }
      },
      imaxDigitalTheaterData: {
        imaxType: 1,
        introImgUrl: this.data.topData.introImgUrl,
        theater: getTheaters(this.data.theaterData[1]),
        theaterAbout: {
          title: 'IMAX®とは'
        }
      },
      imaxMovieData: {
        movieTitleImgUrl: this.data.topData.nowShowingImgUrl,
        movieTitleBgImgUrl: this.data.topData.nowShowingBgImgUrl,
        movieLeftIcon: this.data.topData.nowShowingLeftIcon,
        movieRightIcon: this.data.topData.nowShowingRightIcon,
        movie: ranking
      },
      imaxLaserAboutData: this.data.topData.laser,
      imaxDigitalAboutData: this.data.topData.imax
    }
  },
  components: {
    ImaxTheater,
    ImaxAbout,
    ImaxMovie
  }
}
</script>

<style scoped>
div.ImaxContent {
  min-width: 720px;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
