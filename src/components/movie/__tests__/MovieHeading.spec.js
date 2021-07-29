import { shallowMount } from '@vue/test-utils'
import { movieHeadingData } from '@/components/movie/MovieHeadingData'
import MovieHeading from '@/components/movie/MovieHeading'

describe('MovieHeadingコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieHeadingData.NPS
    const wrapper = shallowMount(
      MovieHeading,
      {
        propsData: {
          data
        }
      }
    )

    const movieHeadingTitleNode = wrapper.findAll('div.MovieHeadingTitle')
    expect(movieHeadingTitleNode).toHaveLength(1)
    expect(movieHeadingTitleNode.at(0).text()).toEqual(data.title)
  })
})
