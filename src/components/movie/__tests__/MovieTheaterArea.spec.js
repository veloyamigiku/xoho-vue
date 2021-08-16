import { movieData } from '@/components/movie/MovieData'
import MovieTheaterArea from '@/components/movie/MovieTheaterArea'
import MovieTheaterPrefecture from '@/components/movie/MovieTheaterPrefecture'
import { shallowMount } from '@vue/test-utils'

describe('MovieTheaterAreaコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieData.theater[1].prefectures
    const wrapper = shallowMount(
      MovieTheaterArea,
      {
        propsData: {
          data
        }
      }
    )

    const movieTheaterPrefectureNodes = wrapper.findAllComponents(MovieTheaterPrefecture)
    expect(movieTheaterPrefectureNodes).toHaveLength(data.length)
    data.forEach(function (movieTheaterPrefecture, movieTheaterPrefectureIdx) {
      const movieTheaterPrefectureNode = movieTheaterPrefectureNodes.at(movieTheaterPrefectureIdx)
      expect(movieTheaterPrefectureNode.props().data).toEqual(movieTheaterPrefecture)
    })
  })
})
