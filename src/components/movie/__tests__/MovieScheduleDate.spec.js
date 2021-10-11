import { shallowMount } from '@vue/test-utils'
import { movieScheduleDateData } from '@/components/movie/MovieScheduleDateData'
import MovieScheduleDate from '@/components/movie/MovieScheduleDate'

describe('MovieScheduleDateコンポーネント', () => {
  it('イベントのテスト', async () => {
    const onClickMock = jest.fn()
    const data = movieScheduleDateData
    const wrapper = shallowMount(
      MovieScheduleDate,
      {
        propsData: {
          data,
          onClick: onClickMock
        }
      }
    )

    const movieScheduleDateNodes = wrapper.findAll('div.MovieScheduleDateGroup > div')
    expect(movieScheduleDateNodes).toHaveLength(data.length)
    expect(wrapper.findAll('div.MovieScheduleDateActive')).toHaveLength(1)
    expect(wrapper.findAll('div.MovieScheduleDate')).toHaveLength(data.length - 1)
    const movieScheduleDateNode1 = movieScheduleDateNodes.at(0)
    expect(movieScheduleDateNode1.attributes().class).toEqual('MovieScheduleDateActive')

    movieScheduleDateNodes.at(data.length - 1).trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('div.MovieScheduleDateActive')).toHaveLength(1)
    expect(wrapper.findAll('div.MovieScheduleDate')).toHaveLength(data.length - 1)
    const movieScheduleDateNode2 = movieScheduleDateNodes.at(data.length - 1)
    expect(movieScheduleDateNode2.attributes().class).toEqual('MovieScheduleDateActive')
  })

  it('プロップスのテスト', () => {
    const onClickMock = jest.fn()
    const data = movieScheduleDateData
    const wrapper = shallowMount(
      MovieScheduleDate,
      {
        propsData: {
          data,
          onClick: onClickMock
        }
      }
    )

    const scheduleDateTitleNodes = wrapper.findAll('div.MovieScheduleDateTitle')
    expect(scheduleDateTitleNodes).toHaveLength(data.length)
    const scheduleDateOptionNodes = wrapper.findAll('div.MovieScheduleDateOption')
    expect(scheduleDateOptionNodes).toHaveLength(data.length)
    data.forEach(function (scheduleDate, scheduleDateIdx) {
      const scheduleDateTitleNode = scheduleDateTitleNodes.at(scheduleDateIdx)
      expect(scheduleDateTitleNode.text()).toContain(scheduleDate.month)
      expect(scheduleDateTitleNode.text()).toContain(scheduleDate.day)
      expect(scheduleDateTitleNode.text()).toContain(scheduleDate.d)
      const scheduleDateOptionNode = scheduleDateOptionNodes.at(scheduleDateIdx)
      expect(scheduleDateOptionNode.text()).toEqual(scheduleDate.option)
    })
  })
})
