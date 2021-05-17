import { shallowMount } from '@vue/test-utils'
import { topMenu } from '@/components/common/TopMenuData'
import TopMenu from '@/components/common/TopMenu'
import TopMenuItem from '@/components/common/TopMenuItem'

describe('TopMenuコンポーネント', () => {
  it('プロップスのテスト', () => {
    const wrapper = shallowMount(
      TopMenu,
      {
        propsData: {
          data: topMenu
        }
      }
    )

    const topMenuItemNodes = wrapper.findAllComponents(TopMenuItem)
    expect(topMenuItemNodes).toHaveLength(topMenu.length)
    topMenu.forEach(function (topMenuItem, topMenuItemIdx) {
      const topMenuItemNode = topMenuItemNodes.at(topMenuItemIdx)
      expect(topMenuItemNode.props().data).toEqual(topMenuItem)
      expect(topMenuItemNode.props().widthRatio).toEqual(100 / topMenu.length)
    })
  })
})
