import { information } from '@/components/top/information/InformationData'
import { shallowMount } from '@vue/test-utils'
import InformationItem from '@/components/top/information/InformationItem'
import { fromStringStyleToObject, fromHexColorToRGBColor } from '@/test/utils'

describe('InformationItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = information[0]
    const wrapper = shallowMount(
      InformationItem,
      {
        propsData: {
          data
        }
      }
    )

    const informationItemImgNode = wrapper.findAll('img.InformationItemImg')
    expect(informationItemImgNode).toHaveLength(1)
    expect(informationItemImgNode.at(0).attributes().src).toEqual(data.imgUrl)

    const informationItemTypeNode = wrapper.findAll('div.InformationItemType')
    expect(informationItemTypeNode).toHaveLength(1)
    expect(informationItemTypeNode.at(0).text()).toEqual(data.type)
    const informationItemTypeNodeStyle = fromStringStyleToObject(informationItemTypeNode.at(0).attributes().style)
    expect(informationItemTypeNodeStyle['background-color']).toEqual(fromHexColorToRGBColor(data.typeBackColor))
    expect(informationItemTypeNodeStyle.color).toEqual(fromHexColorToRGBColor(data.typeColor))
    const informationItemContent = wrapper.findAll('div.InformationItemContent')
    expect(informationItemContent).toHaveLength(1)
    expect(informationItemContent.at(0).text()).toEqual(data.title)
  })
})
