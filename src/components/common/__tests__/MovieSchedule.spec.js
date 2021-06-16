import { comingSoon } from '@/components/coming_soon/ComingSoonData'
import { shallowMount } from '@vue/test-utils'
import MovieSchedule from '@/components/common/MovieSchedule'
import { getDateStr, getScheduleDateList } from '@/utils/coming_soon/schedule'

describe('MovieScheduleコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = comingSoon
    const wrapper = shallowMount(
      MovieSchedule,
      {
        propsData: {
          data
        }
      }
    )

    const scheduleDateList = getScheduleDateList(data)
    const movieScheduleDateNodes = wrapper.findAll('div.MovieScheduleDate')
    expect(movieScheduleDateNodes).toHaveLength(scheduleDateList.length)
    scheduleDateList.forEach(function (scheduleDate, scheduleDateIdx) {
      const movieScheduleDateNode = movieScheduleDateNodes.at(scheduleDateIdx)
      const movieScheduleDate = getDateStr(
        scheduleDate.year,
        scheduleDate.month,
        scheduleDate.day)
      expect(movieScheduleDateNode.text()).toEqual(movieScheduleDate)
    })
  })
})
