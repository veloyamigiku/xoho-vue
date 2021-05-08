import { shallowMount } from '@vue/test-utils'
import SubMenu from '@/components/common/SubMenu'
import SubMenuTab from '@/components/common/SubMenuTab'
import SubMenuContent from '@/components/common/SubMenuContent'
import { menuData } from '@/components/common/MenuData'

describe('SubMenuコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = menuData.search
    const wrapper = shallowMount(
      SubMenu,
      {
        propsData: {
          data
        }
      }
    )

    const subMenuTabNode = wrapper.findAllComponents(SubMenuTab)
    expect(subMenuTabNode).toHaveLength(1)
    expect(subMenuTabNode.at(0).props().data).toEqual(data.tab)

    const subMenuContentNode = wrapper.findAllComponents(SubMenuContent)
    expect(subMenuContentNode).toHaveLength(2)
    data.content.forEach(function (content, contentIdx) {
      expect(subMenuContentNode.at(contentIdx).props().data).toEqual(content)
    })
  })
})
