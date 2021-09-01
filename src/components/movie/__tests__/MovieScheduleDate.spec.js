import { shallowMount } from '@vue/test-utils'
import { movieScheduleDateData } from '@/components/movie/MovieScheduleDateData'
import MovieScheduleDate from '@/components/movie/MovieScheduleDate'

describe('MovieScheduleDateコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieScheduleDateData
    const wrapper = shallowMount(
      MovieScheduleDate,
      {
        propsData: {
          data
        }
      }
    )

    const scheduleDateTitleNodes = wrapper.findAll('div.MovieScheduleDateTitle')
    expect(scheduleDateTitleNodes).toHaveLength(data.length)
    const scheduleDateOptionNodes = wrapper.findAll('div.MovieScheduleDateOption')
    expect(scheduleDateOptionNodes).toHaveLength(data.length)
    data.forEach(function (scheduleDate, scheduleDateIdx) {
      const scheduleDateTitleNode = scheduleDateTitleNodes.at(scheduleDateIdx)
      const dateTitle =
        scheduleDate.month +
        '/' +
        scheduleDate.day +
        '(' +
        scheduleDate.d +
        ')'
      expect(scheduleDateTitleNode.text()).toEqual(dateTitle)
      const scheduleDateOptionNode = scheduleDateOptionNodes.at(scheduleDateIdx)
      expect(scheduleDateOptionNode.text()).toEqual(scheduleDate.option)
    })
  })
})
