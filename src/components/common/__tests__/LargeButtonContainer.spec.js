import { nowPlayingLargeButton } from '@/components/now_playing/NowPlayingLargeButtonData'
import { shallowMount } from '@vue/test-utils'
import LargeButtonContainer from '@/components/common/LargeButtonContainer'
import LargeButton from '@/components/common/LargeButton'

describe('LargeButtonContainerコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = nowPlayingLargeButton
    const wrapper = shallowMount(
      LargeButtonContainer,
      {
        propsData: {
          data
        }
      }
    )

    const largeButtonNodes = wrapper.findAllComponents(LargeButton)
    expect(largeButtonNodes).toHaveLength(nowPlayingLargeButton.length)
    nowPlayingLargeButton.forEach(function (largeButton, largeButtonIdx) {
      const largeButtonNode = largeButtonNodes.at(largeButtonIdx)
      expect(largeButtonNode.props().data).toEqual(largeButton)
    })
  })
})
