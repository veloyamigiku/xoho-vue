import { shallowMount } from '@vue/test-utils'
import TopMenuItem from '@/components/common/TopMenuItem'
import { topMenu } from '@/components/common/TopMenuData'
import { fromStringStyleToObject } from '@/test/utils'

describe('TopMenuItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = topMenu[0]
    const wrapper = shallowMount(
      TopMenuItem,
      {
        propsData: {
          data,
          widthRatio: 100 / topMenu.length
        }
      }
    )

    const topMenuItemNode = wrapper.findAll('div.TopMenuItem')
    expect(topMenuItemNode).toHaveLength(1)
    const styleObj = fromStringStyleToObject(topMenuItemNode.at(0).attributes().style)
    expect(styleObj.width).toEqual(100 / topMenu.length + '%')
    expect(topMenuItemNode.at(0).attributes().style).toContain(100 / topMenu.length + '%')
    const topMenuItemLinkNode = wrapper.findAll('a.TopMenuItemLink')
    expect(topMenuItemLinkNode).toHaveLength(1)
    expect(topMenuItemLinkNode.at(0).attributes().href).toEqual(data.url)
    const topMenuItemTitleNode = wrapper.findAll('div.TopMenuItemTitle')
    expect(topMenuItemTitleNode).toHaveLength(1)
    expect(topMenuItemTitleNode.at(0).text()).toEqual(data.title)
    const topMenuItemSubNode = wrapper.findAll('div.TopMenuItemSub')
    expect(topMenuItemSubNode).toHaveLength(1)
    expect(topMenuItemSubNode.at(0).text()).toEqual(data.sub)
  })
})
