import { shallowMount } from '@vue/test-utils'
import { movieData } from '@/components/movie/MovieData'
import MovieTheaterContent from '@/components/movie/MovieTheaterContent'
import MovieTheaterArea from '@/components/movie/MovieTheaterArea'

describe('MovieTheaterContentコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieData.theater
    const wrapper = shallowMount(
      MovieTheaterContent,
      {
        propsData: {
          data
        }
      }
    )

    const movieTheaterAreaNodes = wrapper.findAllComponents(MovieTheaterArea)
    expect(movieTheaterAreaNodes).toHaveLength(data.length)
    data.forEach(function (movieTheaterArea, movieTheaterAreaIdx) {
      const movieTheaterAreaNode = movieTheaterAreaNodes.at(movieTheaterAreaIdx)
      expect(movieTheaterAreaNode.props().data).toEqual(movieTheaterArea.prefectures)
    })
  })
})
