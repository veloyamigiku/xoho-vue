import { nowPlayingLargeButton } from '@/components/now_playing/NowPlayingLargeButtonData'
import { shallowMount } from '@vue/test-utils'
import LargeButton from '@/components/common/LargeButton'

describe('LargeButtonコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = nowPlayingLargeButton[0]
    const wrapper = shallowMount(
      LargeButton,
      {
        propsData: {
          data
        }
      }
    )

    const largeButtonLinkNode = wrapper.findAll('a.LargeButtonLink')
    expect(largeButtonLinkNode).toHaveLength(1)
    expect(largeButtonLinkNode.at(0).attributes().href).toEqual(data.url)
    expect(largeButtonLinkNode.at(0).text()).toEqual(data.title)
  })
})
