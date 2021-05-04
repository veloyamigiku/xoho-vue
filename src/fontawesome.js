import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram, faLine, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowsAlt, faBoxOpen, faCompactDisc, faCompress, faCompressAlt, faCompressArrowsAlt, faCouch, faDolly, faExpandArrowsAlt, faFileVideo, faFilm, faHome, faMapSigns, faPeopleCarry, faRemoveFormat, faRoute, faSign, faSignInAlt, faSuitcase, faTape, faTrailer, faTruckLoading, faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { faFileVideo as farFileVideo } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

library.add(
  faFacebookSquare,
  faInstagram,
  faLine,
  faTwitter,
  faYoutube,
  faHome,
  faSignInAlt,
  faMapSigns,
  faFileVideo,
  farFileVideo,
  faCompactDisc,
  faTruckMoving,
  faTrailer,
  faSuitcase,
  faFilm,
  faExpandArrowsAlt,
  faCompressArrowsAlt,
  faCompressAlt,
  faCompress,
  faTruckLoading,
  faPeopleCarry,
  faArrowsAlt,
  faRemoveFormat,
  faTape,
  faSign,
  faCouch,
  faBoxOpen,
  faRoute,
  faDolly
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
