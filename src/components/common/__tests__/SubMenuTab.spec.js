import { shallowMount } from '@vue/test-utils'
import SubMenuTab from '@/components/common/SubMenuTab'
import SubMenuTabItem from '@/components/common/SubMenuTabItem'
import { menuData } from '../MenuData'

describe('SubMenuTabコンポーネント', () => {
  it('イベントのテスト', async () => {
    const data = menuData.search.tab
    const clickMock = jest.fn()
    const wrapper = shallowMount(
      SubMenuTab,
      {
        propsData: {
          data,
          activeIdx: 1,
          click: clickMock
        }
      }
    )

    const subMenuTabItemNodes = wrapper.findAllComponents(SubMenuTabItem)
    expect(subMenuTabItemNodes).toHaveLength(data.length)
    await subMenuTabItemNodes.at(0).trigger('click')
    expect(clickMock.mock.calls.length).toBe(1)
    expect(clickMock.mock.calls[0][0]).toBe(0)
  })

  it('プロップスのテスト', () => {
    const data = menuData.search.tab
    const clickMock = jest.fn()
    const wrapper = shallowMount(
      SubMenuTab,
      {
        propsData: {
          data,
          click: clickMock
        }
      }
    )

    const subMenuTabItemNodes = wrapper.findAllComponents(SubMenuTabItem)
    expect(subMenuTabItemNodes).toHaveLength(data.length)
    data.forEach(function (subMenuTabItem, subMenuTabItemIdx) {
      const subMenuTabItemNode = subMenuTabItemNodes.at(subMenuTabItemIdx)
      expect(subMenuTabItemNode.props().data).toEqual(subMenuTabItem)
    })
  })
})
