import Top from '@/components/top/Top'
import NowPlaying from '@/components/now_playing/NowPlaying'

const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/movie/now_playing',
    component: NowPlaying
  }
]

export default routes
