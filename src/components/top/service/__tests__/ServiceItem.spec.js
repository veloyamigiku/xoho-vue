import { service } from '@/components/top/service/ServiceData'
import { shallowMount } from '@vue/test-utils'
import ServiceItem from '@/components/top/service/ServiceItem'

describe('ServiceItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = service.item[0]
    const wrapper = shallowMount(
      ServiceItem,
      {
        propsData: {
          data
        }
      }
    )

    const serviceItemLinkNode = wrapper.findAll('a.ServiceItemLink')
    expect(serviceItemLinkNode).toHaveLength(1)
    expect(serviceItemLinkNode.at(0).attributes().href).toEqual(data.url)

    const serviceItemImgNode = wrapper.findAll('img.ServiceItemImg')
    expect(serviceItemImgNode).toHaveLength(1)
    expect(serviceItemImgNode.at(0).attributes().src).toEqual(data.imgUrl)

    const serviceItemTitleNode = wrapper.findAll('div.ServiceItemTitle')
    expect(serviceItemTitleNode).toHaveLength(1)
    expect(serviceItemTitleNode.at(0).text()).toEqual(data.title)

    const serviceItemSubNode = wrapper.findAll('div.ServiceItemSub')
    expect(serviceItemSubNode).toHaveLength(1)
    expect(serviceItemSubNode.at(0).text()).toEqual(data.sub)
  })
})
