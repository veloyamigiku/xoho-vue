import { box } from '@/components/top/box/BoxData'
import Box from '@/components/top/box/Box'
import BoxItem from '@/components/top/box/BoxItem'
import { shallowMount } from '@vue/test-utils'

describe('Boxコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = box
    const wrapper = shallowMount(
      Box,
      {
        propsData: {
          data
        }
      }
    )

    const boxItemNodes = wrapper.findAllComponents(BoxItem)
    expect(boxItemNodes).toHaveLength(data.length)
    data.forEach(function (boxItem, boxItemIdx) {
      const boxItemNode = boxItemNodes.at(boxItemIdx)
      expect(boxItemNode.props().data).toEqual(boxItem)
    })
  })
})
