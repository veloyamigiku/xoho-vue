import { mount } from '@vue/test-utils'
import axios from 'axios'
import { movieData } from '@/components/movie/MovieData'
import MovieTop from '@/components/movie/MovieTop'
import MovieSummary from '@/components/movie/MovieSummary'

jest.mock('axios')

describe('MovieTopコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_info':
          return {
            data: movieData
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
  })
})
