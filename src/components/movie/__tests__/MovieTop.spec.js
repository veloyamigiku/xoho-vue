import axios from 'axios'
import { movieData } from '../MovieData'

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

  it('レンダリングのテスト', () => {

  })
})
