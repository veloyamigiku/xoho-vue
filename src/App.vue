<template>
  <div id="wrapper">
    <div id="header">
      <Header />
    </div>
    <div id="main">
      <div id="menu_wrapper">
        <div id="menu">
          <Menu :data="menuData" />
        </div>
      </div>
      <div id="contents_wrapper">
        <div id="contents">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div id="footer">
      <Footer :data="footerData" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Menu from '@/components/common/Menu'
import axios from 'axios'
import 'normalize.css'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Menu
  },
  data () {
    return {
      footerData: {},
      menuData: {}
    }
  },
  mounted () {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/footer_link?front_type=vue')
      .then(response => {
        this.footerData = response.data
      })
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/menu?front_type=vue')
      .then(response => {
        this.menuData = response.data
      })
  }
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}

body {
  background-color: rgb(245, 245, 245);
  font-family: Verdana, '游ゴシック体', 'Yu Gothic', YuGothic, sans-serif;
}
</style>

<style scoped>
#wrapper {
  width: 100%;
  height: 100%;
}

#header {
  width: 100%;
  height: 50px;
  background-color: #212121;
}

#main {
  display: table;
  width: 100%;
  /* screen-height(vh) - header-height(px) - footer-height(px) */
  height: calc(100vh - 50px - 150px);
}

#menu_wrapper {
  display: table-cell;
  width: 230px;
  min-width: 230px;
  height: 100%;
  background-color: #292929;
}

#menu {
  height: 100%;
  overflow-y: auto;
}

#menu::-webkit-scrollbar {
  width: 6px;
}

#menu::-webkit-scrollbar-thumb {
  background-color: #a9a9a9;
}

#contents_wrapper {
  display: table-cell;
  /* table-cellの上部のpaddingを除去する。 */
  vertical-align: top;
  height: 100%;
}

#contents {
  height: 100%;
  overflow-y: auto;
}

#contents::-webkit-scrollbar {
  width: 6px;
}

#contents::-webkit-scrollbar-thumb {
  background-color: #a9a9a9;
}

#contents::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, .1);
}

#footer {
  width: 100%;
  height: 150px;
  background-color: #424242;
}
</style>
