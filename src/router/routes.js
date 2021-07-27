import Top from '@/components/top/Top'
import NowPlaying from '@/components/now_playing/NowPlaying'
import ComingSoon from '@/components/coming_soon/ComingSoon'
import TheaterTop from '@/components/theater/TheaterTop'
import MovieTop from '@/components/movie/MovieTop'

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
    path: '/movie/:id',
    component: MovieTop
  },
  {
    path: '/theater',
    component: TheaterTop
  }
]

export default routes
