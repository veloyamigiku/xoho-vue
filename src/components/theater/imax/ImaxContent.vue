<template>
  <div class="ImaxContent">
    <ImaxTheater :data="imaxLasertTheaterData" />
    <ImaxTheater :data="imaxDigitalTheaterData" />
  </div>
</template>

<script>
import ImaxTheater from '@/components/theater/imax/ImaxTheater'
import { getTheaters } from '@/components/theater/imax/ImaxUtils'

export default {
  name: 'ImaxContent',
  props: {
    data: Object
  },
  data () {
    return {
      imaxLasertTheaterData: {
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
      }
    }
  },
  components: {
    ImaxTheater
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
