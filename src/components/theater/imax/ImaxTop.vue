<template>
  <div class="ImaxTop">
    <ImaxHeader :data="headerData" v-if="headerData" />
    <ImaxContent :data="contentData" v-if="contentData" />
  </div>
</template>

<script>
import axios from 'axios'
import ImaxHeader from '@/components/theater/imax/ImaxHeader'
import ImaxContent from '@/components/theater/imax/ImaxContent'

export default {
  name: 'ImaxTop',
  components: {
    ImaxHeader,
    ImaxContent
  },
  mounted () {
    Promise.all(
      [
        axios.get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/imax'),
        axios.get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/theater?type=6,1&front_type=vue')
      ]
    )
      .then(ress => {
        var topData
        var theaterData
        ress.forEach(res => {
          if (res.data.logo) {
            topData = res.data
          } else if (Array.isArray(res.data)) {
            theaterData = res.data
          }
        })
        this.headerData = topData
        this.contentData = {
          topData: topData,
          theaterData: {
            6: theaterData[0],
            1: theaterData[1]
          }
        }
      })
  },
  data () {
    return {
      headerData: undefined,
      contentData: undefined
    }
  }
}
</script>

<style scoped>
div.ImaxTop {
  background: url("https://lh3.googleusercontent.com/pw/AM-JKLU7SLZjcYu1yOU8jk0g8Kr87GyjJA1TB2bf-XnXu3Ek84SXPHt0ze3dsmKsAqY9SkE2VHLlxdulh7q0B01TTsbgBwgoqAGRpff1WMa1CH6MaBtGAAp_Y4lEnix9cbLQZatKA40fofQnwviME5s_0aUL=w1368-h10-no?authuser=0") repeat-y center #012238;
}
</style>
