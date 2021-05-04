import { shallowMount } from '@vue/test-utils'
import MenuItemB from '@/components/common/MenuItemB'
import { menuData } from '@/components/common/MenuData'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

describe('MenuItemBコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = menuData.info[0]
    const wrapper = shallowMount(
      MenuItemB,
      {
        propsData: {
          data
        }
      }
    )

    const menuItemBLinkNodes = wrapper.findAll('div.MenuItemB a.MenuItemBLink')
    expect(menuItemBLinkNodes).toHaveLength(1)
    const menuItemBLinkNode = menuItemBLinkNodes.at(0)
    expect(menuItemBLinkNode.attributes().href).toEqual(data.url)
    const menuItemBLabelNode = wrapper.findAll('div.MenuItemB a.MenuItemBLink div.MenuItemBLabel')
    expect(menuItemBLabelNode).toHaveLength(1)
    expect(menuItemBLabelNode.at(0).html()).toContain(data.label)
    const menuItemBIconNode = wrapper.findAllComponents(FontAwesomeIcon)
    expect(menuItemBIconNode).toHaveLength(1)
    expect(menuItemBIconNode.at(0).attributes().icon.split(',')).toEqual(data.icon)
  })
})
