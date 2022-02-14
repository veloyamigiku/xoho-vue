<template>
  <div
    class="ImaxMovieRoot"
    :style="{
      background: 'url(' + data.movieTitleBgImgUrl + ') repeat left top'
        }">
    <div>
      <img
        class="ImaxMovieTitleImg"
        :src="data.movieTitleImgUrl"
        alt="ImaxmovieTitleImg" />
    </div>
    <div class="ImaxMovieWrap">
      <div
        class="ImaxMovie"
        :style="{
          width: ImaxMovieConst.imaxMovieWidthPer + '%'
          }"
        >
        <div
          class="ImaxMovieImgGroup"
          :style="{
            marginRight: 'calc((100% - ' + (ImaxMovieConst.imaxMovieImgWrapWidth * ImaxMovieConst.imaxMovieImgWrapCount) + 'px) / 2)',
            marginLeft: 'calc((100% - ' + (ImaxMovieConst.imaxMovieImgWrapWidth * ImaxMovieConst.imaxMovieImgWrapCount) + 'px) / 2)'
            }"
          ref="ImaxMovieImgGroup"
          @click="() => slideMovie()"
          :key="resetKey">
          <div
            v-for="(imaxMovie, imaxMovieIdx) in movieData.slice(0, ImaxMovieConst.imaxMovieImgWrapCount)"
            :key="'ImaxMovieImgWrap' + imaxMovieIdx"
            class="ImaxMovieImgWrap"
            :style="{width: ImaxMovieConst.imaxMovieImgWrapWidth + 'px'}"
            ref="ImaxMovieImgWrap">
            <img
              class="ImaxMovieImg"
              :src="imaxMovie.imgUrl"
              alt="ImaxMovieImg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConstantsLoader from '@/utils/ConstantsLoader'

const ImaxMovieConst = Object.freeze({
  imaxMovieImgWrapCount: 5,
  imaxMovieImgWrapWidth: 500,
  imaxMovieWidthPer: 60,
  imaxMovieLeftRightWidth: 30
})

export default {
  name: 'ImaxMovie',
  props: {
    data: Object
  },
  methods: {
    slideMovie: function () {
      const imaxMovieImgGroupWidth = this.$refs.ImaxMovieImgGroup.clientWidth
      const imaxMovieImgWidth = imaxMovieImgGroupWidth / ImaxMovieConst.imaxMovieImgWrapCount
      this.$refs.ImaxMovieImgWrap[0].style.marginLeft = -imaxMovieImgWidth + 'px'
    },
    registShiftPushMovieData: function () {
      this.$refs.ImaxMovieImgWrap[0].addEventListener('transitionend', () => {
        const firstMovieData = this.movieData.shift()
        this.movieData.push(firstMovieData)
        this.resetKey += 1
      })
    }
  },
  data () {
    return {
      resetKey: 0,
      movieData: this.data.movie
    }
  },
  mounted: function () {
    this.registShiftPushMovieData()
  },
  updated: function () {
    this.registShiftPushMovieData()
  },
  mixins: [
    ConstantsLoader({ ImaxMovieConst })
  ]
}
</script>

<style scoped>
div.ImaxMovieWrap {
  position: relative;
}

div.ImaxMovie {
  overflow: hidden;
  margin: 0 auto;
}

div.ImaxMovieImgGroup::after {
  display: block;
  content: '';
  clear: both;
}

div.ImaxMovieImgWrap {
  float: left;
  transition-property: margin-left;
  transition-timing-function: ease;
  transition-duration: .6s;
}

img.ImaxMovieImg {
  width: 100%;
}
</style>
