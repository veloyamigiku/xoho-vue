import { movieData } from '@/components/movie/MovieData'
import { shallowMount } from '@vue/test-utils'
import MovieTheaterItem from '@/components/movie/MovieTheaterItem'
import MovieTheaterItemHeader from '@/components/movie/MovieTheaterItemHeader'

describe('MovieTheaterItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieData.theater[1].prefectures[0].theater[0]
    const wrapper = shallowMount(
      MovieTheaterItem,
      {
        propsData: {
          data
        }
      }
    )

    const movieTheaterItemHeaderNode = wrapper.findAllComponents(MovieTheaterItemHeader)
    expect(movieTheaterItemHeaderNode).toHaveLength(1)
    expect(movieTheaterItemHeaderNode.at(0).props().data).toEqual(data)
  })
})
