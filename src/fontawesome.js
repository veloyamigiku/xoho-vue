import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram, faLine, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

library.add(
  faFacebookSquare,
  faInstagram,
  faLine,
  faTwitter,
  faYoutube
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
