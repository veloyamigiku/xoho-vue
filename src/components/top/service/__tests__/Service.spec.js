import { service } from '@/components/top/service/ServiceData'
import { shallowMount } from '@vue/test-utils'
import Service from '@/components/top/service/Service'
import ServiceItem from '@/components/top/service/ServiceItem'
import ServiceButton from '@/components/top/service/ServiceButton'
import ServiceDelim from '@/components/top/service/ServiceDelim'

describe('Serviceコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = service
    const wrapper = shallowMount(
      Service,
      {
        propsData: {
          data
        }
      }
    )

    var serviceItemList = []
    const serviceItemNodes = wrapper.findAllComponents(ServiceItem)
    var serviceButtonList = []
    const serviceButtonNodes = wrapper.findAllComponents(ServiceButton)
    var serviceDelimList = []
    const serviceDelimNodes = wrapper.findAllComponents(ServiceDelim)
    data.forEach(function (s) {
      switch (s.type) {
        case 'item':
          serviceItemList.push(s)
          break
        case 'button':
          serviceButtonList.push(s)
          break
        case 'delim':
          serviceDelimList.push(s)
          break
        default:
          break
      }
    })

    expect(serviceItemNodes).toHaveLength(serviceItemList.length)
    serviceItemList.forEach(function (serviceItem, serviceItemIdx) {
      const serviceItemNode = serviceItemNodes.at(serviceItemIdx)
      expect(serviceItemNode.props().data).toEqual(serviceItem)
    })

    expect(serviceButtonNodes).toHaveLength(serviceButtonList.length)
    serviceButtonList.forEach(function (serviceButton, serviceButtonIdx) {
      const serviceButtonNode = serviceButtonNodes.at(serviceButtonIdx)
      expect(serviceButtonNode.props().data).toEqual(serviceButton)
    })

    expect(serviceDelimNodes).toHaveLength(serviceDelimList.length)
  })
})
