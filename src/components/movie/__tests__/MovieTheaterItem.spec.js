import { movieData } from '@/components/movie/MovieData'
import { mount, shallowMount } from '@vue/test-utils'
import MovieTheaterItem from '@/components/movie/MovieTheaterItem'
import MovieTheaterItemHeader from '@/components/movie/MovieTheaterItemHeader'
import MovieTheaterItemContent from '@/components/movie/MovieTheaterItemContent'
import MovieScheduleDate from '@/components/movie/MovieScheduleDate'
import MovieScheduleScreen from '@/components/movie/MovieScheduleScreen'
import axios from 'axios'
import '@/fontawesome'
import { movieScheduleDateData } from '@/components/movie/movieScheduleDateData'
import { movieScheduleScreenDataPtn1, movieScheduleScreenDataPtn2 } from '@/components/movie/MovieScheduleScreenData'
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
            data: movieScheduleScreenDataPtn1
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/movie_schedule_screen?year=2021&month=8&day=30&title=竜とそばかすの姫':
          return {
            data: movieScheduleScreenDataPtn2
          }
      }
    })
  })

  it('イベントのテスト_' +
    '子コンポーネントのイベント処理（ヘッダーのクリック） -> ' +
    '子コンポーネントの映画劇場日付スクリーン取得呼び出し -> ' +
    '子コンポーネントのイベント処理（日付のクリック） -> ' +
    '子コンポーネントの映画劇場スクリーン取得呼び出し', async () => {
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

    const movieTheaterScheduleDateNode = wrapper.findAllComponents(MovieScheduleDate)
    expect(movieTheaterScheduleDateNode).toHaveLength(1)
    expect(movieTheaterScheduleDateNode.at(0).props().data).toEqual(movieScheduleDateData)

    const movieTheaterScheduleScreenNode1 = wrapper.findAllComponents(MovieScheduleScreen)
    expect(movieTheaterScheduleScreenNode1).toHaveLength(1)
    expect(movieTheaterScheduleScreenNode1.at(0).props().data).toEqual(movieScheduleScreenDataPtn1)

    const movieScheduleDateNode = wrapper.findAll('div.MovieScheduleDate')
    expect(movieScheduleDateNode.length).toBeGreaterThanOrEqual(1)
    movieScheduleDateNode.at(0).trigger('click')
    await flushPromises()

    const movieTheaterScheduleScreenNode2 = wrapper.findAllComponents(MovieScheduleScreen)
    expect(movieTheaterScheduleScreenNode2).toHaveLength(1)
    expect(movieTheaterScheduleScreenNode2.at(0).props().data).toEqual(movieScheduleScreenDataPtn2)
  })

  it('プロップスのテスト', () => {
    const headerData = movieData.theater[1].prefectures[0].theater[0]
    const wrapper = shallowMount(
      MovieTheaterItem,
      {
        propsData: {
          headerData
        }
      }
    )

    const movieTheaterItemHeaderNode = wrapper.findAllComponents(MovieTheaterItemHeader)
    expect(movieTheaterItemHeaderNode).toHaveLength(1)
    expect(movieTheaterItemHeaderNode.at(0).props().data).toEqual(headerData)

    const movieTheaterItemContentNode = wrapper.findAllComponents(MovieTheaterItemContent)
    expect(movieTheaterItemContentNode).toHaveLength(1)
  })
})
