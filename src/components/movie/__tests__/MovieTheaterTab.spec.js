import { movieData } from '@/components/movie/MovieData'
import { shallowMount } from '@vue/test-utils'
import MovieTheaterTab from '@/components/movie/MovieTheaterTab'

describe('MovieTheaterTabコンポーネント', () => {
  it('イベントのテスト', async () => {
    const movieTheaterTabItemClass = 'MovieTheaterTabItem'
    const movieTheaterTabItemActiveClass = 'MovieTheaterTabItemActive'
    const data = movieData.theater
    const wrapper = shallowMount(
      MovieTheaterTab,
      {
        propsData: {
          data
        }
      }
    )

    const movieTheaterTabItemNodes1 = wrapper.findAll('div.MovieTheaterTab div')
    const movieTheaterTabItemNodes1First = movieTheaterTabItemNodes1.at(0)
    const movieTheaterTabItemNodes1Last = movieTheaterTabItemNodes1.at(movieTheaterTabItemNodes1.length - 1)
    expect(movieTheaterTabItemNodes1First.attributes().class).toEqual(movieTheaterTabItemActiveClass)
    expect(movieTheaterTabItemNodes1Last.attributes().class).toEqual(movieTheaterTabItemClass)
    movieTheaterTabItemNodes1Last.trigger('click')
    await wrapper.vm.$nextTick()
    const movieTheaterTabItemNodes2 = wrapper.findAll('div.MovieTheaterTab div')
    const movieTheaterTabItemNodes2First = movieTheaterTabItemNodes2.at(0)
    const movieTheaterTabItemNodes2Last = movieTheaterTabItemNodes2.at(movieTheaterTabItemNodes2.length - 1)
    expect(movieTheaterTabItemNodes2First.attributes().class).toEqual(movieTheaterTabItemClass)
    expect(movieTheaterTabItemNodes2Last.attributes().class).toEqual(movieTheaterTabItemActiveClass)
  })

  it('プロップスのテスト', () => {
    const data = movieData.theater
    const wrapper = shallowMount(
      MovieTheaterTab,
      {
        propsData: {
          data
        }
      }
    )

    const movieTheaterTabItemNodes = wrapper.findAll('div.MovieTheaterTab div')
    expect(movieTheaterTabItemNodes).toHaveLength(data.length)
    data.forEach(function (theaterByAreaPrefecture, theaterByAreaPrefectureIdx) {
      const movieTheaterTabItemNode = movieTheaterTabItemNodes.at(theaterByAreaPrefectureIdx)
      expect(movieTheaterTabItemNode.text()).toEqual(theaterByAreaPrefecture.area.name)
    })
  })
})
