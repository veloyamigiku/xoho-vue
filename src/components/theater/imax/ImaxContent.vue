<template>
  <div>
    <ImaxTheater :data="imaxLasertTheaterData" />
    <ImaxTheater :data="imaxDigitalTheaterData" />
  </div>
</template>

<script>
import ImaxTheater from '@/components/theater/imax/ImaxTheater'
import axios from 'axios'

export default {
  name: 'ImaxContent',
  props: {
    data: Object
  },
  data () {
    return {
      imaxLasertTheaterData: {},
      imaxDigitalTheaterData: {}
    }
  },
  components: {
    ImaxTheater
  },
  mounted () {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/theater?type=6&front_type=react')
      .then(res => {
        this.imaxLasertTheaterData = {
          introImgUrl: this.data.lasertIntroImgUrl,
          theater: res.data
        }
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/theater?type=1&front_type=react')
      .then(res => {
        this.imaxDigitalTheaterData = {
          introImgUrl: this.data.introImgUrl,
          theater: res.data
        }
      })
  }
}
</script>

<style scoped>
</style>
