<template>
  <div
    class="LoginMenuButton"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
    :style="{
      backgroundColor: isHover ? data.backgroundColorHover : data.backgroundColor,
      transition: 'background .3s'
    }">
    <a
      class="LoginMenuButtonA"
      :href="data.url"
      :style="{
        color: isHover ? data.colorHover : data.color,
        transition: 'color .3s'
      }">
      <div>{{data.label}}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'LoginMenuButton',
  props: {
    data: Object
  },
  data () {
    return {
      isHover: false
    }
  },
  methods: {
    onMouseOver: function () {
      this.isHover = true
    },
    onMouseOut: function () {
      this.isHover = false
    }
  }
}
</script>

<style scoped>
div.LoginMenuButton {
  width: 210px;
  margin-right: 20px;
  border: solid 1px #9c9c9c;
  border-radius: 5px;
}

a.LoginMenuButtonA {
  font-size: 16px;
  text-align: center;
  text-decoration: none;
}

a.LoginMenuButtonA div {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
