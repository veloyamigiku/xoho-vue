import { mount } from '@vue/test-utils'
import axios from 'axios'
import { movieData } from '@/components/movie/MovieData'
import MovieTop from '@/components/movie/MovieTop'
import MovieSummary from '@/components/movie/MovieSummary'
import MovieHeading from '@/components/movie/MovieHeading'
import { movieHeadingData } from '@/components/movie/MovieHeadingData'
import Heading from '@/components/common/Heading'
import { headingData } from '@/components/movie/HeadingData'
import { movieLargeButtonData } from '@/components/movie/MovieLargeButtonData'
import LargeButtonContainer from '@/components/common/LargeButtonContainer'
import MovieTheater from '@/components/movie/MovieTheater'
import '@/fontawesome'

jest.mock('axios')

describe('MovieTopコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_info':
          return {
            data: movieData
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=vue&page_type=movie':
          return {
            data: movieLargeButtonData
          }
      }
    })
  })

  it('レンダリングのテスト', async () => {
    const data = movieData
    const wrapper = mount(MovieTop)
    await wrapper.vm.$nextTick()

    const movieSummaryNode = wrapper.findAllComponents(MovieSummary)
    expect(movieSummaryNode).toHaveLength(1)
    expect(movieSummaryNode.at(0).props().data).toEqual(data)

    const movieHeadingNodes = wrapper.findAllComponents(MovieHeading)
    expect(movieHeadingNodes).toHaveLength(Object.keys(movieHeadingData).length)
    const npsMovieHeadingNode = movieHeadingNodes.at(0)
    expect(npsMovieHeadingNode.props().data).toEqual(movieHeadingData.NPS)

    const headingNodes = wrapper.findAllComponents(Heading)
    expect(headingNodes).toHaveLength(Object.keys(headingData).length)
    const nhHeadingNode = headingNodes.at(0)
    expect(nhHeadingNode.props().data).toEqual(headingData.NH)
    const pbttHeadingNode = headingNodes.at(1)
    expect(pbttHeadingNode.props().data).toEqual(headingData.PBTT)
    const tlisHeadingNode = headingNodes.at(2)
    expect(tlisHeadingNode.props().data).toEqual(headingData.TLIS)

    const movieTheaterNode = wrapper.findAllComponents(MovieTheater)
    expect(movieTheaterNode).toHaveLength(1)
    expect(movieTheaterNode.at(0).props().data).toEqual(data.theater)

    const largeButtonContainerNode = wrapper.findAllComponents(LargeButtonContainer)
    expect(largeButtonContainerNode).toHaveLength(1)
    expect(largeButtonContainerNode.at(0).props().data).toEqual(movieLargeButtonData)
  })
})
