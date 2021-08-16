import { movieData } from '@/components/movie/MovieData'
import { shallowMount } from '@vue/test-utils'
import MovieTheaterItem from '@/components/movie/MovieTheaterItem'

describe('MovieTheaterItemコンポーネント', () => {
  it('プロップスのテスト_共通', () => {
    const data = movieData.theater[1].prefectures[0].theater[0]
    const wrapper = shallowMount(
      MovieTheaterItem,
      {
        propsData: {
          data
        }
      }
    )

    const movieTheaterItemTitleNode = wrapper.findAll('div.MovieTheaterItemTitle')
    expect(movieTheaterItemTitleNode).toHaveLength(1)
    expect(movieTheaterItemTitleNode.at(0).text()).toContain(data.name)
  })
})
