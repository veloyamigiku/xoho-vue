import { information } from '@/components/top/information/InformationData'
import { shallowMount } from '@vue/test-utils'
import Information from '@/components/top/information/Information'
import InformationItem from '@/components/top/information/InformationItem'

describe('Informationコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = information
    const wrapper = shallowMount(
      Information,
      {
        propsData: {
          data
        }
      }
    )

    const informationItemNodes = wrapper.findAllComponents(InformationItem)
    expect(informationItemNodes).toHaveLength(data.length)
    data.forEach(function (info, infoIdx) {
      const informationItemNode = informationItemNodes.at(infoIdx)
      expect(informationItemNode.props().data).toEqual(info)
    })
  })
})
