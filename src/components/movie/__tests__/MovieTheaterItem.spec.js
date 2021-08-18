import { movieData } from '@/components/movie/MovieData'
import { shallowMount } from '@vue/test-utils'
import MovieTheaterItem from '@/components/movie/MovieTheaterItem'
import MovieTheaterItemHeader from '@/components/movie/MovieTheaterItemHeader'
// import MovieTheaterItemContent from '@/components/movie/MovieTheaterItemContent'

describe('MovieTheaterItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const headerData = movieData.theater[1].prefectures[0].theater[0]
    // const contentData = {}
    const wrapper = shallowMount(
      MovieTheaterItem,
      {
        propsData: {
          headerData
          // contentData
        }
      }
    )

    const movieTheaterItemHeaderNode = wrapper.findAllComponents(MovieTheaterItemHeader)
    expect(movieTheaterItemHeaderNode).toHaveLength(1)
    expect(movieTheaterItemHeaderNode.at(0).props().data).toEqual(headerData)
    /*
    const movieTheaterItemContentNode = wrapper.findAllComponents(MovieTheaterItemContent)
    expect(movieTheaterItemContentNode).toHaveLength(1)
    expect(movieTheaterItemContentNode.at(0).props().data).toEqual(contentData) */
  })
})
