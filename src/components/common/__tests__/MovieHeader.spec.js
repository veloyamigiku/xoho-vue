import { comingSoon } from '@/components/coming_soon/ComingSoonData'
import { shallowMount } from '@vue/test-utils'
import MovieHeader from '@/components/common/MovieHeader'
import { getDayOfWeekStr } from '@/utils/date'

describe('MovieHeaderコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = comingSoon[0]
    const wrapper = shallowMount(
      MovieHeader,
      {
        propsData: {
          data
        }
      }
    )

    const movieHeaderTitleNode = wrapper.findAll('div.MovieHeaderTitle')
    expect(movieHeaderTitleNode).toHaveLength(1)
    const dayOfWeek = getDayOfWeekStr(data.year, data.month, data.day)
    expect(movieHeaderTitleNode.at(0).text()).toEqual(data.month + '/' + data.day + '(' + dayOfWeek + ')')
  })
})
