import SubMenuTabItem from '@/components/common/SubMenuTabItem'
import { menuData } from '@/components/common/MenuData'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { shallowMount } from '@vue/test-utils'

describe('SubMenuTabItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = menuData.search.tab[0]
    const wrapper = shallowMount(
      SubMenuTabItem,
      {
        propsData: {
          data
        }
      }
    )

    const subMenuTabItemLabelNode = wrapper.findAll('div.SubMenuTabItemLabel')
    expect(subMenuTabItemLabelNode).toHaveLength(1)
    expect(subMenuTabItemLabelNode.at(0).html()).toContain(data.label)
    const subMenuTabItemIconNode = wrapper.findAllComponents(FontAwesomeIcon)
    expect(subMenuTabItemIconNode).toHaveLength(1)
    expect(subMenuTabItemIconNode.at(0).attributes().icon.split(',')).toEqual(data.icon)
  })
})
