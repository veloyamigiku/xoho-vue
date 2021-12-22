<template>
  <div>
    <div>
      <img
        class="ImaxIntroImg"
        :src="data.introImgUrl"
        alt="ImaxIntroImg" />
    </div>
    <div>
      <div
        v-for="(theater, theaterIdx) in data.theater"
        :key="'ImaxTheaterIntroImg' + theaterIdx">
        <img
          class="ImaxTheaterIntroImg"
          :src="theater.introImgUrl[data.imaxType]"
          alt="ImaxTheaterIntroImg" />
      </div>
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
</style>
