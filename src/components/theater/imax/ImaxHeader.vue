<template>
  <div class="ImaxHeader">
    <div class="ImaxHeaderLogo">
      <div class="ImaxHeaderLogoInner">
        <img class="ImaxHeaderLogo" :src="data.logo" />
      </div>
    </div>
    <div>
      <img class="ImaxHeaderTitleImg" :src="data.titleImgUrl" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImaxHeader',
  props: {
    data: Object
  }
}
</script>

<style scoped>
div.ImaxHeader {
  min-width: 720px;
  max-width: 1280px;
  margin: 0 auto;
}

div.ImaxHeaderLogo {
  background: url("https://lh3.googleusercontent.com/pw/AM-JKLU4NR-_HrxtnnGQ3TneqqVLNDLu1mqXiEDX0UuJsA1GVSXlkwNfZYH_BXMlSgOpJMCEAzlihrMmG57a5H6n8DxPDuZJA2M2YStZ7Jij3OX0RiwkPS84UAX7BYf5EI8r0wWmV7O6s0pamc0xYMCTsJJW=w2-h49-no?authuser=0") repeat-x;
}

div.ImaxHeaderLogoInner {
  max-width: 935px;
  margin: 0 auto;
}

img.ImaxHeaderTitleImg {
  width: 100%;
}
</style>
