import { comingSoon } from '@/components/coming_soon/ComingSoonData'
import { shallowMount } from '@vue/test-utils'
import MovieContainer from '@/components/common/MovieContainer'
import MovieContainerItem from '@/components/common/MovieContainerItem'

describe('MovieContainerコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = comingSoon
    const wrapper = shallowMount(
      MovieContainer,
      {
        propsData: {
          data
        }
      }
    )

    const movieContainerItemNodes = wrapper.findAllComponents(MovieContainerItem)
    expect(movieContainerItemNodes).toHaveLength(comingSoon.length)
    comingSoon.forEach(function (movieContainerItem, movieContainerItemIdx) {
      const movieContainerItemNode = movieContainerItemNodes.at(movieContainerItemIdx)
      expect(movieContainerItemNode.props().data).toEqual(movieContainerItem)
    })
  })
})
