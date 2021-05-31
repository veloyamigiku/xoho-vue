import { service } from '@/components/top/service/ServiceData'
import { shallowMount } from '@vue/test-utils'
import Service from '@/components/top/service/Service'
import ServiceItem from '@/components/top/service/ServiceItem'
import ServiceButton from '@/components/top/service/ServiceButton'

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

    const serviceItemNodes = wrapper.findAllComponents(ServiceItem)
    expect(serviceItemNodes).toHaveLength(data.item.length)
    data.item.forEach(function (serviceItem, serviceItemIdx) {
      const serviceItemNode = serviceItemNodes.at(serviceItemIdx)
      expect(serviceItemNode.props().data).toEqual(serviceItem)
    })

    const serviceButtonNodes = wrapper.findAllComponents(ServiceButton)
    expect(serviceButtonNodes).toHaveLength(data.buttonGroup1.length + data.buttonGroup2.length)
    const serviceButtonList = data.buttonGroup1.concat(data.buttonGroup2)
    serviceButtonList.forEach(function (serviceButton, serviceButtonIdx) {
      const serviceButtonNode = serviceButtonNodes.at(serviceButtonIdx)
      expect(serviceButtonNode.props().data).toEqual(serviceButton)
    })
  })
})
