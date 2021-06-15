import { comingSoon } from '@/components/coming_soon/ComingSoonData'
import { shallowMount } from '@vue/test-utils'
import MovieContainerItem from '@/components/common/MovieContainerItem'
import MovieHeader from '@/components/common/MovieHeader'
import MovieGroup from '@/components/common/MovieGroup'

describe('MovieContainerItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = comingSoon[0]
    const wrapper = shallowMount(
      MovieContainerItem,
      {
        propsData: {
          data
        }
      }
    )

    const movieHeaderNode = wrapper.findAllComponents(MovieHeader)
    expect(movieHeaderNode).toHaveLength(1)
    expect(movieHeaderNode.at(0).props().data).toEqual(data)

    const movieGroupNode = wrapper.findAllComponents(MovieGroup)
    expect(movieGroupNode).toHaveLength(1)
    expect(movieGroupNode.at(0).props().data).toEqual(data.movie)
  })
})
