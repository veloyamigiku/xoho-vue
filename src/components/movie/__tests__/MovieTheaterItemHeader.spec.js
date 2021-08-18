import { movieData } from '@/components/movie/MovieData'
import { shallowMount } from '@vue/test-utils'
import MovieTheaterItemHeader from '@/components/movie/MovieTheaterItemHeader'

describe('MovieTheaterItemコンポーネント', () => {
  it('プロップスのテスト_都道府県あり', () => {
    const data = movieData.theater[1].prefectures[0].theater[0]
    const pref = movieData.theater[1].prefectures[0].prefecture.name
    const wrapper = shallowMount(
      MovieTheaterItemHeader,
      {
        propsData: {
          data: { ...data, ...{ pref: pref } }
        }
      }
    )

    const movieTheaterItemHeaderPrefectureNode = wrapper.findAll('div.MovieTheaterItemHeaderPrefecture')
    expect(movieTheaterItemHeaderPrefectureNode).toHaveLength(1)
    expect(movieTheaterItemHeaderPrefectureNode.at(0).text()).toContain(pref)
  })

  it('プロップスのテスト_都道府県なし', () => {
    const data = movieData.theater[1].prefectures[0].theater[0]
    const wrapper = shallowMount(
      MovieTheaterItemHeader,
      {
        propsData: {
          data
        }
      }
    )

    const movieTheaterItemHeaderPrefectureNode = wrapper.findAll('div.MovieTheaterItemHeaderPrefecture')
    expect(movieTheaterItemHeaderPrefectureNode).toHaveLength(0)
  })

  it('プロップスのテスト_共通', () => {
    const data = movieData.theater[1].prefectures[0].theater[0]
    const wrapper = shallowMount(
      MovieTheaterItemHeader,
      {
        propsData: {
          data
        }
      }
    )

    const movieTheaterItemHeaderTitleNode = wrapper.findAll('div.MovieTheaterItemHeaderTitle')
    expect(movieTheaterItemHeaderTitleNode).toHaveLength(1)
    expect(movieTheaterItemHeaderTitleNode.at(0).text()).toContain(data.name)
  })
})
