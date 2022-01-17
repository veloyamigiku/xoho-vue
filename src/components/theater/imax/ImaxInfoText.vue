<template>
  <div class="ImaxInfoText">
    <div class="ImaxInfoTextHeader">{{ data.header }}</div>
    <div class="ImaxInfoTextBody">{{ data.body }}</div>
  </div>
</template>

<script>
export default {
  name: 'ImaxInfoText',
  props: {
    data: Object
  }
}
</script>

<style scoped>
div.ImaxInfoText {
  margin: 40px auto 0 auto;
  max-width: 940px;
}

div.ImaxInfoTextHeader {
  padding: 10px 0;
  color: #fff;
  background-color: #0d5b88;
  font-family: 'M PLUS 1p';
  font-size: 38px;
  font-weight: 400;
  text-align: center;
}

div.ImaxInfoTextBody {
  padding: 55px 30px;
  color: #fff;
  background-color: #020925;
  font-family: 'M PLUS 1p';
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -0.025em;
}
</style>
