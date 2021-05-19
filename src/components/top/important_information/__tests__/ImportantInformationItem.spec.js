import { shallowMount } from '@vue/test-utils'
import { importantInformation } from '@/components/top/important_information/ImportantInformationData'
import ImportantInformationItem from '@/components/top/important_information/ImportantInformationItem'

describe('ImportantInformationItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = importantInformation[0]
    const wrapper = shallowMount(
      ImportantInformationItem,
      {
        propsData: {
          data
        }
      }
    )

    const importantInformationLinkNode = wrapper.findAll('a.ImportantInformationItemLink')
    expect(importantInformationLinkNode).toHaveLength(1)
    expect(importantInformationLinkNode.at(0).attributes().href).toEqual(data.url)
    expect(importantInformationLinkNode.at(0).text()).toEqual(data.label)
  })
})
