import { theaterData } from '@/components/theater/TheaterData'
import { shallowMount } from '@vue/test-utils'
import Theater from '@/components/theater/Theater'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

describe('Theaterコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = theaterData[6].prefecture[2].theater[0]
    const wrapper = shallowMount(
      Theater,
      {
        propsData: {
          data
        }
      }
    )

    const theaterLinkNode = wrapper.findAll('a.TheaterLink')
    expect(theaterLinkNode).toHaveLength(1)
    expect(theaterLinkNode.at(0).attributes().href).toEqual(data.url)

    const theaterNameNode = wrapper.findAll('div.TheaterName')
    expect(theaterNameNode).toHaveLength(1)
    expect(theaterNameNode.at(0).text()).toEqual(data.name)

    const theaterSubNode = wrapper.findAll('div.TheaterSub')
    expect(theaterSubNode).toHaveLength(1)
    expect(theaterSubNode.at(0).text()).toEqual(data.sub)

    const theaterTypeNameNodes = wrapper.findAll('div.TheaterTypeName')
    expect(theaterTypeNameNodes).toHaveLength(data.type.length)
    const theaterTypeIconNodes = wrapper.findAllComponents(FontAwesomeIcon)
    var typeIconIdx = 0
    data.type.forEach(function (type, typeIdx) {
      const theaterTypeNameNode = theaterTypeNameNodes.at(typeIdx)
      expect(theaterTypeNameNode.text()).toEqual(type.name)
      if (type.icon) {
        const theaterTypeIconNode = theaterTypeIconNodes.at(typeIconIdx)
        expect(theaterTypeIconNode.attributes().icon.split(',')).toEqual(type.icon)
        typeIconIdx += 1
      }
    })
    const typeIconCount = typeIconIdx === 0 ? 0 : typeIconIdx
    expect(theaterTypeIconNodes).toHaveLength(typeIconCount)
  })
})
