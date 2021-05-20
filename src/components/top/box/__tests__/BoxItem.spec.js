import { box } from '@/components/top/box/BoxData'
import BoxItem from '@/components/top/box/BoxItem'
import { shallowMount } from '@vue/test-utils'

describe('BoxItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = box[0]
    const wrapper = shallowMount(
      BoxItem,
      {
        propsData: {
          data
        }
      }
    )

    const boxItemTitleNode = wrapper.findAll('div.BoxItemTitle')
    expect(boxItemTitleNode).toHaveLength(1)
    expect(boxItemTitleNode.at(0).text()).toEqual(data.title)
    const boxItemImgNode = wrapper.findAll('img.BoxItemImg')
    expect(boxItemImgNode).toHaveLength(1)
    expect(boxItemImgNode.at(0).attributes().src).toEqual(data.imgUrl)
    const boxItemDescNode = wrapper.findAll('div.BoxItemDesc')
    expect(boxItemDescNode).toHaveLength(1)
    expect(boxItemDescNode.at(0).text()).toEqual(data.desc)
    const boxItemButtonLinkNode = wrapper.findAll('a.BoxItemButtonLink')
    expect(boxItemButtonLinkNode).toHaveLength(1)
    expect(boxItemButtonLinkNode.at(0).attributes().href).toEqual(data.buttonUrl)
    const boxItemButtonLinkLabelNode = wrapper.findAll('div.BoxItemButtonLinkLabel')
    expect(boxItemButtonLinkLabelNode).toHaveLength(1)
    expect(boxItemButtonLinkLabelNode.at(0).text()).toEqual(data.buttonTitle)
  })
})
