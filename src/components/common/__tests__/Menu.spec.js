import { shallowMount } from '@vue/test-utils'
import Menu from '@/components/common/Menu'
import MenuItemA from '@/components/common/MenuItemA'
import SubMenu from '@/components/common/SubMenu'
import MenuItemB from '@/components/common/MenuItemB'
import { menuData } from '@/components/common/MenuData'

describe('Menuコンポーネント', () => {
  it('プロップスのテスト', () => {
    const wrapper = shallowMount(
      Menu,
      {
        propsData: {
          data: menuData
        }
      }
    )

    const menuItemANodes = wrapper.findAllComponents(MenuItemA)
    const allMenuItemA = menuData.menu1.concat(menuData.menu2)
    expect(menuItemANodes).toHaveLength(allMenuItemA.length)
    allMenuItemA.forEach(function (menuItemA, menuItemAIdx) {
      const menuItemANode = menuItemANodes.at(menuItemAIdx)
      expect(menuItemANode.props().data).toEqual(menuItemA)
    })

    const subMenuNode = wrapper.findAllComponents(SubMenu)
    expect(subMenuNode).toHaveLength(1)
    expect(subMenuNode.at(0).props().data).toEqual(menuData.search)

    const menuItemBNodes = wrapper.findAllComponents(MenuItemB)
    expect(menuItemBNodes).toHaveLength(menuData.info.length)
    menuData.info.forEach(function (menuItemB, menuItemBIdx) {
      const menuItemBNode = menuItemBNodes.at(menuItemBIdx)
      expect(menuItemBNode.props().data).toEqual(menuItemB)
    })
  })
})
