<template>
  <div class="ImportantInformationItem">
    <a
      class="ImportantInformationItemLink"
      :href="data.url"
      >{{ data.label }}</a>
  </div>
</template>

<script>
export default {
  name: 'ImportantInformationItem',
  props: {
    data: Object
  }
}
</script>

<style scoped>
div.ImportantInformationItem:nth-of-type(n + 2) {
  margin-top: 10px;
}

a.ImportantInformationItemLink {
  font-weight: 700;
  color: #0d47a1;
  text-decoration: none;
  transition: color .3s;
}

a.ImportantInformationItemLink:hover {
  color: #b71c1c;
}
</style>
