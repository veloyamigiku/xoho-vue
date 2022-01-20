<template>
  <div
    class="ImaxMovie"
    :key="resetKey">
    <div
      class="ImaxMovieImgGroup"
      :style="{
        marginRight: 'calc(-100% / ' + (movieItemCount - 2) + ')',
        marginLeft: 'calc(-100% / ' + (movieItemCount - 2) + ')'
        }"
      ref="ImaxMovieImgGroup"
      @click="() => slideMovie()">
      <div
        v-for="(imaxMovie, imaxMovieIdx) in movieData.slice(0, movieItemCount)"
        :key="'ImaxMovieImgWrap' + imaxMovieIdx"
        class="ImaxMovieImgWrap"
        :style="{width: 'calc(100% / ' + movieItemCount + ')'}"
        ref="ImaxMovieImgWrap">
        <img
          class="ImaxMovieImg"
          :src="imaxMovie.imgUrl"
          alt="ImaxMovieImg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImaxMovie',
  props: {
    data: Array
  },
  methods: {
    slideMovie: function () {
      const imaxMovieImgGroupWidth = this.$refs.ImaxMovieImgGroup.clientWidth
      console.log(imaxMovieImgGroupWidth)
      const imaxMovieImgWidth = imaxMovieImgGroupWidth / this.movieItemCount
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
      movieItemCount: 5,
      resetKey: 0,
      movieData: this.data
    }
  },
  mounted: function () {
    this.registShiftPushMovieData()
  },
  updated: function () {
    this.registShiftPushMovieData()
  }
}
</script>

<style scoped>
div.ImaxMovie {
  overflow: hidden;
}

div.ImaxMovieImgGroup::after {
  display: block;
  content: '';
  clear: both;
}

div.ImaxMovieImgWrap {
  float: left;
  width: 500px;
  transition-property: margin-left;
  transition-timing-function: ease;
  transition-duration: .6s;
}

img.ImaxMovieImg {
  width: 100%;
}
</style>
