<template>
  <div class="LoginMenu">
    <LoginMenuButton
      v-for="(loginMenuButton, loginMenuButtonIdx) in data.button"
      :data="loginMenuButton"
      :key="'LoginMenuButton' + loginMenuButtonIdx" />
    <div v-if="data.link">
      <a class="LoginMenuLink" :href="data.link.url">{{data.link.label}}</a>
    </div>
  </div>
</template>

<script>
import LoginMenuButton from '@/components/top/login_menu/LoginMenuButton'

export default {
  name: 'LoginMenu',
  props: {
    data: Object
  },
  components: {
    LoginMenuButton
  }
}
</script>

<style scoped>
div.LoginMenu {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
}

a.LoginMenuLink {
  font-size: 14px;
  color: #0d47a1;
  text-decoration: none;
  transition: color .4s;
}

a.LoginMenuLink:hover {
  color: #b71c1c;
}
</style>
