import { movieData } from '@/components/movie/MovieData'
import { mount, shallowMount } from '@vue/test-utils'
import MovieTheaterItem from '@/components/movie/MovieTheaterItem'
import MovieTheaterItemHeader from '@/components/movie/MovieTheaterItemHeader'
import MovieTheaterItemContent from '@/components/movie/MovieTheaterItemContent'
import axios from 'axios'
import '@/fontawesome'
import { movieScheduleDateData } from '../movieScheduleDateData'
import { movieScheduleScreenData } from '../MovieScheduleScreenData'
import flushPromises from 'flush-promises'

jest.mock('axios')

describe('MovieTheaterItemコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_date?year=2021&month=8&day=31':
          return {
            data: movieScheduleDateData
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_screen?year=2021&month=8&day=31&title=竜とそばかすの姫':
          return {
            data: movieScheduleScreenData
          }
      }
    })
  })

  it('イベントのテスト', async () => {
    const headerData = movieData.theater[1].prefectures[0].theater[0]
    const wrapper = mount(
      MovieTheaterItem,
      {
        propsData: {
          headerData
        }
      }
    )

    const movieTheaterItemHeaderGroupNode = wrapper.findAll('div.MovieTheaterItemHeaderGroup')
    expect(movieTheaterItemHeaderGroupNode).toHaveLength(1)

    movieTheaterItemHeaderGroupNode.at(0).trigger('click')
    await flushPromises()
    const movieTheaterItemContentNode = wrapper.findAllComponents(MovieTheaterItemContent)
    expect(movieTheaterItemContentNode).toHaveLength(1)
    expect(movieTheaterItemContentNode.at(0).props().data.date).toEqual(movieScheduleDateData)
    expect(movieTheaterItemContentNode.at(0).props().data.screen).toEqual(movieScheduleScreenData)
  })

  it('プロップスのテスト', () => {
    const headerData = movieData.theater[1].prefectures[0].theater[0]
    const wrapper = shallowMount(
      MovieTheaterItem,
      {
        propsData: {
          headerData,
          scheduleDateData: [],
          scheduleScreenData: {}
        }
      }
    )

    const movieTheaterItemHeaderNode = wrapper.findAllComponents(MovieTheaterItemHeader)
    expect(movieTheaterItemHeaderNode).toHaveLength(1)
    expect(movieTheaterItemHeaderNode.at(0).props().data).toEqual(headerData)

    const movieTheaterItemContentNode = wrapper.findAllComponents(MovieTheaterItemContent)
    expect(movieTheaterItemContentNode).toHaveLength(1)
    expect(movieTheaterItemContentNode.at(0).props().data.date).toEqual([])
    expect(movieTheaterItemContentNode.at(0).props().data.screen).toEqual({})
  })
})
