<template>
  <div class="LargeButton">
    <a
      class="LargeButtonLink"
      :href="data.url">
      <div class="LargeButtonTitle">{{ data.title }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'LargeButton',
  props: {
    data: Object
  }
}
</script>

<style scoped>
div.LargeButton {
  margin: 40px 230px;
  background-color: #0d47a1;
  text-align: center;
  border-radius: 4px;
  transition-property: background-color;
  transition-duration: .3s;
}

div.LargeButton:hover {
  background-color: #b71c1c;
}

a.LargeButtonLink {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
}

div.LargeButtonTitle {
  padding: 15px 0;
}
</style>
