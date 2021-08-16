import { shallowMount } from '@vue/test-utils'
import { movieData } from '@/components/movie/MovieData'
import MovieTheaterPrefecture from '@/components/movie/MovieTheaterPrefecture'
import MovieTheaterItem from '@/components/movie/MovieTheaterItem'

describe('MovieTheaterPrefectureコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieData.theater[1].prefectures[0]
    const wrapper = shallowMount(
      MovieTheaterPrefecture,
      {
        propsData: {
          data
        }
      }
    )

    const movieTheaterItemNodes = wrapper.findAllComponents(MovieTheaterItem)
    expect(movieTheaterItemNodes).toHaveLength(data.theater.length)
    data.theater.forEach(function (movieTheater, movieTheaterIdx) {
      const movieTheaterItemNode = movieTheaterItemNodes.at(movieTheaterIdx)
      var tmpMovieTheater = null
      if (movieTheaterIdx === 0) {
        tmpMovieTheater = { ...movieTheater, ...{ pref: data.prefecture.name } }
      } else {
        tmpMovieTheater = { ...movieTheater }
      }
      expect(movieTheaterItemNode.props().data).toEqual(tmpMovieTheater)
    })
  })
})
