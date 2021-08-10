import { movieData } from '@/components/movie/MovieData'
import { shallowMount } from '@vue/test-utils'
import MovieTheaterTab from '@/components/movie/MovieTheaterTab'

describe('MovieTheaterTabコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieData.theater
    const wrapper = shallowMount(
      MovieTheaterTab,
      {
        propsData: {
          data
        }
      }
    )

    const movieTheaterTabItemNodes = wrapper.findAll('div.MovieTheaterTab div')
    expect(movieTheaterTabItemNodes).toHaveLength(data.length)
    data.forEach(function (theaterByAreaPrefecture, theaterByAreaPrefectureIdx) {
      const movieTheaterTabItemNode = movieTheaterTabItemNodes.at(theaterByAreaPrefectureIdx)
      expect(movieTheaterTabItemNode.text()).toEqual(theaterByAreaPrefecture.area.name)
    })
  })
})
