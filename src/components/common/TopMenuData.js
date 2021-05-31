import { commonData } from '@/components/common/CommonData'

export const topMenu = [
  {
    title: '上映中',
    sub: 'Now Playing',
    url: commonData.url + '/movie/now_playing'
  },
  {
    title: '公開予定',
    sub: 'Coming Soon',
    url: commonData.url + '/movie/type=new'
  },
  {
    title: '劇場を探す',
    sub: 'Theater List',
    url: commonData.url + '/theater'
  }
]
