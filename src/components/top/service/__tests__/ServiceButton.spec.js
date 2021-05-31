import { service } from '@/components/top/service/ServiceData'
import { shallowMount } from '@vue/test-utils'
import ServiceButton from '@/components/top/service/ServiceButton'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fromHexColorToRGBColor } from '@/test/utils'
import { fromStringStyleToObject } from '@/test/utils'

describe('ServiceButtonコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = service.buttonGroup1[0]
    const wrapper = shallowMount(
      ServiceButton,
      {
        propsData: {
          data
        }
      }
    )

    const serviceButtonLinkNode = wrapper.findAll('a.ServiceButtonLink')
    expect(serviceButtonLinkNode).toHaveLength(1)
    expect(serviceButtonLinkNode.at(0).attributes().href).toEqual(data.url)

    const serviceButtonIconNode = wrapper.findAllComponents(FontAwesomeIcon)
    if (data.icon) {
      expect(serviceButtonIconNode).toHaveLength(1)
      expect(serviceButtonIconNode.at(0).attributes().icon.split(',')).toEqual(data.icon)
    } else {
      expect(serviceButtonIconNode).toHaveLength(0)
    }

    const serviceButtonTitleNode = wrapper.findAll('div.ServiceButtonTitle')
    expect(serviceButtonTitleNode).toHaveLength(1)
    expect(serviceButtonTitleNode.at(0).text()).toEqual(data.title)
    expect(serviceButtonTitleNode.at(0).attributes().style.color)
    const styleObj = fromStringStyleToObject(serviceButtonTitleNode.at(0).attributes().style)
    expect(styleObj.color).toEqual(fromHexColorToRGBColor(data.titleColor))
  })
})
