import { nowPlaying } from '@/components/now_playing/NowPlayingData'
import { shallowMount } from '@vue/test-utils'
import MovieGroup from '@/components/common/MovieGroup'
import Movie from '@/components/common/Movie'

describe('MovieGroupコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = nowPlaying
    const wrapper = shallowMount(
      MovieGroup,
      {
        propsData: {
          data
        }
      }
    )

    const movieNodes = wrapper.findAllComponents(Movie)
    expect(movieNodes).toHaveLength(data.length)
    data.forEach(function (movie, movieIdx) {
      const movieNode = movieNodes.at(movieIdx)
      expect(movieNode.props().data).toEqual(movie)
    })
  })
})
