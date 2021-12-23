<template>
  <div class="ImaxTheater">
    <div class="ImaxIntroImgWrap">
      <img
        class="ImaxIntroImg"
        :src="data.introImgUrl"
        alt="ImaxIntroImg" />
    </div>
    <div class="ImaxTheaterList">
      <div
        v-for="(theater, theaterIdx) in data.theater"
        class="ImaxTheaterListItem"
        :key="'ImaxTheaterIntroImg' + theaterIdx">
        <a :href="theater.url">
          <img
            class="ImaxTheaterIntroImg"
            :src="theater.introImgUrl[data.imaxType]"
            alt="ImaxTheaterIntroImg" />
        </a>
      </div>
    </div>
    <div class="ImaxTheaterAbout">
      <a
        class="ImaxTheaterAboutTitle"
        href="http://localhost:8080">
        {{ data.theaterAbout.title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImaxTheater',
  props: {
    data: Object
  }
}
</script>

<style scoped>
div.ImaxTheater {
  padding: 64px 0 0 0;
}

div.ImaxIntroImgWrap {
  padding-bottom: 20px;
  text-align: center;
}

div.ImaxTheaterList {
  max-width: 935px;
  width: 100%;
  margin: 0 auto;
}

div.ImaxTheaterListItem {
  padding-bottom: 10px;
}

img.ImaxTheaterIntroImg {
  transition-property: opacity;
  transition-timing-function: ease();
  transition-duration: .3s;
}

img.ImaxTheaterIntroImg:hover {
  opacity: .6;
}

div.ImaxTheaterAbout {
  max-width: 935px;
  width: 100%;
  margin: 0 auto;
  padding-top: 40px;
  text-align: center;
}

a.ImaxTheaterAboutTitle {
  font-size: 30px;
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid #ffffff;
}

</style>
