import MenuItemA from '@/components/common/MenuItemA'
import { menuData } from '@/components/common/MenuData'
import { shallowMount } from '@vue/test-utils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

describe('MenuItemAコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = menuData.menu1[0]
    const wrapper = shallowMount(
      MenuItemA,
      {
        propsData: {
          data: data
        }
      }
    )

    const menuItemALinkNode = wrapper.findAll('div.MenuItemA a.MenuItemALink')
    expect(menuItemALinkNode).toHaveLength(1)
    expect(menuItemALinkNode.at(0).text()).toContain(data.label)
    expect(menuItemALinkNode.at(0).attributes().href).toEqual(data.url)
    const menuItemAIconNode = wrapper.findAllComponents(FontAwesomeIcon)
    expect(menuItemAIconNode).toHaveLength(1)
    expect(menuItemAIconNode.at(0).attributes().icon.split(',')).toEqual(data.icon)
  })
})
