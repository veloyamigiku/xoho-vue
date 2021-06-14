import { nowPlaying } from '@/components/now_playing/NowPlayingData'
import { shallowMount } from '@vue/test-utils'
import Movie from '@/components/common/Movie'

describe('Movieコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = nowPlaying[0]
    const wrapper = shallowMount(
      Movie,
      {
        propsData: {
          data
        }
      }
    )

    const movieLinkNode = wrapper.findAll('a.MovieLink')
    expect(movieLinkNode).toHaveLength(1)
    expect(movieLinkNode.at(0).attributes().href).toEqual(data.url)

    const movieImgNode = wrapper.findAll('img.MovieImg')
    expect(movieImgNode).toHaveLength(1)
    expect(movieImgNode.at(0).attributes().src).toEqual(data.img_url)

    const movieTitleNode = wrapper.findAll('div.MovieTitle')
    expect(movieTitleNode).toHaveLength(1)
    expect(movieTitleNode.at(0).text()).toEqual(data.title)
  })
})
