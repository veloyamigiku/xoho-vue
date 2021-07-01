import Top from '@/components/top/Top'
import NowPlaying from '@/components/now_playing/NowPlaying'
import ComingSoon from '@/components/coming_soon/ComingSoon'
import Theater from '@/components/theater/Theater'

const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/movie/now_playing',
    component: NowPlaying
  },
  {
    path: '/movie/coming_soon',
    component: ComingSoon
  },
  {
    path: '/theater',
    component: Theater
  }
]

export default routes
