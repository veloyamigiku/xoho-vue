<template>
  <div class="Heading">
    <div class="HeadingTitle">{{data.title}}</div>
    <div class="HeadingSub">{{data.sub}}</div>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    data: Object
  }
}
</script>

<style scoped>
div.Heading {
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 6px;
  border-left: 5px solid #b71c1c;
}

div.HeadingTitle {
  font-size: 20px;
}

div.HeadingSub {
  font-size: 16px;
  color: #616161;
}
</style>
