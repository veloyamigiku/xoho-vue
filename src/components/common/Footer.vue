<template>
  <div class="Footer">
    <div class="FooterTop">
      <div><a href=".">ページトップへ</a></div>
    </div>
    <div class="FooterLink">
      <div class="FooterLinkGroup" v-if="data.link && data.link.length > 0">
        <div class="FooterLinkItem" v-for="(footerLink, footerLinkIdx) in data.link" :key="'FooterLinkItem' + footerLinkIdx">
          <a class="FooterLinkA" :href="footerLink.url">{{ footerLink.label }}</a>
        </div>
      </div>
      <div class="FooterSNSLink">
        <div class="FooterSNSLinkGroup" v-if="data.snsLink && data.snsLink.length > 0">
          <a
            class="FooterSNSLinkA"
            v-for="(footerSNSLink, footerSNSLinkIdx) in data.snsLink"
            :key="'FooterSNSLink' + footerSNSLinkIdx"
            :href="footerSNSLink.url">
            <FontAwesomeIcon class="FooterSNSIcon" :icon="footerSNSLink.icon" />
          </a>
        </div>
      </div>
    </div>
    <div class="FooterCopyright">TM & © TOHO Cinemas Ltd. All Rights Reserved.</div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'Footer',
  props: {
    data: Object
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.FooterTop {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 40px;
  background-color: #373737;
  text-align: center;
}

.FooterTop a {
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}

.FooterTop a:hover {
  opacity: .6;
}

.FooterLink {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70px;
}

.FooterLinkGroup {
    display: flex;
    align-items: center;
    justify-content: center;
}

.FooterLinkItem:nth-of-type(n + 2) {
    margin-left: 15px;
}

.FooterLinkA {
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
}

.FooterLinkA:hover {
    opacity: .6;
}

.FooterLinkItem:nth-of-type(n + 2) .FooterLinkA {
    padding-left: 15px;
    border-left: 1px solid #616161;
}

.FooterSNSLinkGroup {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}

.FooterSNSLink a:hover {
    opacity: .6;
}

.FooterSNSLink a:nth-of-type(n + 2) {
    margin-left: 15px;
}

.FooterSNSIcon {
    color: white;
    font-size: 20px;
}

.FooterCopyright {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    color: #a1a1a1;
    font-size: 80%;
}
</style>
