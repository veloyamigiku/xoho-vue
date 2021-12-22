<template>
  <div>
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
        theater: getTheaters(this.data.theaterData[6])
      },
      imaxDigitalTheaterData: {
        imaxType: 1,
        introImgUrl: this.data.topData.introImgUrl,
        theater: getTheaters(this.data.theaterData[1])
      }
    }
  },
  components: {
    ImaxTheater
  }
}
</script>

<style scoped>
</style>
