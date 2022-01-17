<template>
  <div>
    <div>
      <img
        class="ImaxAboutTitleImg"
        :src="data.titleImgUrl"
        alt="ImaxAboutTitleImg" />
    </div>
    <div>
      <img
        class="ImaxAboutImg"
        :src="data.imgUrl"
        alt="ImaxAboutImg" />
    </div>
    <div>
      <img
        class="ImaxAboutTextImg"
        :src="data.textImgUrl"
        alt="ImaxAboutTextImg" />
    </div>
    <div>
      <div
        v-for="(info, infoIdx) in data.info"
        :key="'ImaxInfo' + infoIdx">
        <ImaxInfoText
          v-if="info.type === 'text'"
          :data="info" />
        <ImaxInfoImage
          v-if="info.type === 'image'"
          :data="info" />
      </div>
    </div>
  </div>
</template>

<script>
import ImaxInfoText from '@/components/theater/imax/ImaxInfoText'
import ImaxInfoImage from '@/components/theater/imax/ImaxInfoImage'

export default {
  name: 'ImaxAbout',
  props: {
    data: Object
  },
  components: {
    ImaxInfoText,
    ImaxInfoImage
  }
}
</script>

<style scoped>
</style>
