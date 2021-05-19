import { importantInformation } from '@/components/top/important_information/ImportantInformationData'
import { shallowMount } from '@vue/test-utils'
import ImportantInformation from '@/components/top/important_information/ImportantInformation'
import ImportantInformationItem from '@/components/top/important_information/ImportantInformationItem'

describe('ImportantInformationコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = importantInformation
    const wrapper = shallowMount(
      ImportantInformation,
      {
        propsData: {
          data
        }
      }
    )

    const importantInformationItemNodes = wrapper.findAllComponents(ImportantInformationItem)
    expect(importantInformationItemNodes).toHaveLength(data.length)
    importantInformation.forEach(function (importantInformationItem, importantInformationItemIdx) {
      const importantInformationItemNode = importantInformationItemNodes.at(importantInformationItemIdx)
      expect(importantInformationItemNode.props().data).toEqual(importantInformationItem)
    })
  })
})
