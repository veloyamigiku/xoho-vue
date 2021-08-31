import { movieScheduleDateData } from '../MovieScheduleDateData'
import { movieScheduleScreenData } from '../MovieScheduleScreenData'
import { shallowMount } from '@vue/test-utils'
import MovieTheaterItemContent from '@/components/movie/MovieTheaterItemContent'
import MovieScheduleDate from '@/components/movie/MovieScheduleDate'
import MovieScheduleScreen from '@/components/movie/MovieScheduleScreen'

describe('MovieTheaterItemContentコンポーネント', () => {
  it('プロップスのテスト', () => {
    const scheduleDateData = movieScheduleDateData
    const scheduleScreenData = movieScheduleScreenData
    const wrapper = shallowMount(
      MovieTheaterItemContent,
      {
        propsData: {
          scheduleDateData,
          scheduleScreenData
        }
      }
    )

    const movieScheduleDateNode = wrapper.findAllComponents(MovieScheduleDate)
    expect(movieScheduleDateNode).toHaveLength(1)
    expect(movieScheduleDateNode.at(0).props().data).toEqual(scheduleDateData)

    const movieScheduleScreenNode = wrapper.findAllComponents(MovieScheduleScreen)
    expect(movieScheduleScreenNode).toHaveLength(1)
    expect(movieScheduleScreenNode.at(0).props().data).toEqual(scheduleScreenData)
  })
})
