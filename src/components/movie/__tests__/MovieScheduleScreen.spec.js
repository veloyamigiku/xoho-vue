import { shallowMount } from '@vue/test-utils'
import { movieScheduleScreenDataPtn1 } from '../MovieScheduleScreenData'
import MovieScheduleScreen from '@/components/movie/MovieScheduleScreen'

describe('MovieScheduleScreenコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieScheduleScreenDataPtn1
    const wrapper = shallowMount(
      MovieScheduleScreen,
      {
        propsData: {
          data
        }
      }
    )

    const movieScheduleScreenDateNode = wrapper.findAll('div.MovieScheduleScreenDate')
    expect(movieScheduleScreenDateNode).toHaveLength(1)
    const movieScheduleScreenDate =
      data.month +
      '月' +
      data.day +
      '日(' +
      data.d +
      ')'
    expect(movieScheduleScreenDateNode.at(0).text()).toEqual(movieScheduleScreenDate)

    const movieScheduleScreenTitleNode = wrapper.findAll('div.MovieScheduleScreenTitle')
    expect(movieScheduleScreenTitleNode).toHaveLength(1)
    expect(movieScheduleScreenTitleNode.at(0).text()).toEqual(data.title)

    var screenList = []
    var termList = []
    data.screen.forEach(function (s) {
      screenList.push(s)
      s.term.forEach(function (t) {
        termList.push(t)
      })
    })
    const movieScheduleScreenNameNodes = wrapper.findAll('div.MovieScheduleScreenName')
    expect(movieScheduleScreenNameNodes).toHaveLength(screenList.length)
    screenList.forEach(function (s, sIdx) {
      const movieScheduleScreenNameNode = movieScheduleScreenNameNodes.at(sIdx)
      expect(movieScheduleScreenNameNode.text()).toEqual('SCREEN' + s.screen)
    })
    const movieScheduleScreenTermNodes = wrapper.findAll('div.MovieScheduleScreenTerm')
    expect(movieScheduleScreenTermNodes).toHaveLength(termList.length)
    termList.forEach(function (t, tIdx) {
      const movieScheduleScreenTermNode = movieScheduleScreenTermNodes.at(tIdx)
      expect(movieScheduleScreenTermNode.text()).toContain(String(t.startHour).padStart(2, '0') + ':' + String(t.startMinute).padStart(2, '0'))
      expect(movieScheduleScreenTermNode.text()).toContain(String(t.endHour).padStart(2, '0') + ':' + String(t.endMinute).padStart(2, '0'))
    })
  })
})
