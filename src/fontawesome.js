import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram, faLine, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faAdjust, faAirFreshener, faAllergies, faAmbulance, faAmericanSignLanguageInterpreting, faArrowsAlt, faBan, faBoxOpen, faChevronDown, faChevronLeft, faChevronRight, faCompactDisc, faCompress, faCompressAlt, faCompressArrowsAlt, faCouch, faDolly, faExpandArrowsAlt, faFileVideo, faFilm, faHome, faMapSigns, faPeopleCarry, faRemoveFormat, faRoute, faSign, faSignInAlt, faSuitcase, faTape, faTrailer, faTruckLoading, faTruckMoving, faYenSign } from '@fortawesome/free-solid-svg-icons'
import { faCircle, faDotCircle, faFileVideo as farFileVideo } from '@fortawesome/free-regular-svg-icons'
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
  faDolly,
  faYenSign,
  faBan,
  faAdjust,
  faAirFreshener,
  faAllergies,
  faAmbulance,
  faAmericanSignLanguageInterpreting,
  faChevronDown,
  faDotCircle,
  faChevronLeft,
  faChevronRight,
  faCircle
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
