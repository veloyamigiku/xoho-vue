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
      <div id="contents">
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
      .get('http://localhost:9000/footer_link')
      .then(response => {
        this.footerData = response.data
      })
    axios
      .get('http://localhost:9000/menu')
      .then(response => {
        this.menuData = response.data
      })
  }
}
</script>

<style scoped>
html,
body,
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
  width: 210px;
  height: 100%;
  background-color: #292929;
}

#menu {
  height: 100%;
  overflow-y: auto;
}

#contents {
  display: table-cell;
  height: 100%;
}

#footer {
  width: 100%;
  height: 150px;
  background-color: #424242;
}
</style>
