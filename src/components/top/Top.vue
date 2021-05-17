<template>
  <div class="Top">
    <TopMenu :data="topMenuData" />
    <LoginMenu :data="loginMenuData" />
  </div>
</template>

<script>
import axios from 'axios'
import TopMenu from '@/components/common/TopMenu'
import LoginMenu from '@/components/top/login_menu/LoginMenu'

export default {
  name: 'Top',
  components: {
    TopMenu,
    LoginMenu
  },
  data () {
    return {
      topMenuData: [],
      loginMenuData: {}
    }
  },
  mounted () {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu')
      .then(res => {
        this.topMenuData = res.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/login_menu')
      .then(res => {
        this.loginMenuData = res.data
      })
  }
}
</script>

<style scoped>
div.Top {
  width: calc(100% - 200px);
  margin: 0 auto;
}
</style>
