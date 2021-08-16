import { movieData } from '@/components/movie/MovieData'
import { shallowMount } from '@vue/test-utils'
import MovieTheater from '@/components/movie/MovieTheater'
import MovieTheaterTab from '@/components/movie/MovieTheaterTab'
import MovieTheaterContent from '@/components/movie/MovieTheaterContent'

describe('MovieTheaterコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieData.theater
    const wrapper = shallowMount(
      MovieTheater,
      {
        propsData: {
          data
        }
      }
    )

    const movieTheaterTabNode = wrapper.findAllComponents(MovieTheaterTab)
    expect(movieTheaterTabNode).toHaveLength(1)
    expect(movieTheaterTabNode.at(0).props().data).toEqual(data)

    const movieTheaterContentNode = wrapper.findAllComponents(MovieTheaterContent)
    expect(movieTheaterContentNode).toHaveLength(1)
    expect(movieTheaterContentNode.at(0).props().data).toEqual(data)
  })
})
