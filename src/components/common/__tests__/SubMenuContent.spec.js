import { shallowMount } from '@vue/test-utils'
import SubMenuContent from '@/components/common/SubMenuContent'
import MenuItemA from '@/components/common/MenuItemA'
import { menuData } from '@/components/common/MenuData'

describe('SubMenuContentコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = menuData.search.content[0]
    const wrapper = shallowMount(
      SubMenuContent,
      {
        propsData: {
          data
        }
      }
    )

    const menuItemANodes = wrapper.findAllComponents(MenuItemA)
    expect(menuItemANodes).toHaveLength(data.length)
    data.forEach(function (menuItem, menuItemIdx) {
      const menuItemANode = menuItemANodes.at(menuItemIdx)
      expect(menuItemANode.props().data).toEqual(menuItem)
    })
  })
})
