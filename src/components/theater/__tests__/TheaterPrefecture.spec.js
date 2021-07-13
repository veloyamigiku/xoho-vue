import { theaterData } from '@/components/theater/TheaterData'
import { shallowMount } from '@vue/test-utils'
import TheaterPrefecture from '@/components/theater/TheaterPrefecture'
import Theater from '@/components/theater/Theater'

describe('TheaterPrefectureコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = theaterData[0].prefecture[0]
    const wrapper = shallowMount(
      TheaterPrefecture,
      {
        propsData: {
          data
        }
      }
    )

    const prefectureNameNode = wrapper.findAll('div.TheaterPrefectureName')
    expect(prefectureNameNode).toHaveLength(1)
    expect(prefectureNameNode.at(0).text()).toEqual(data.name)

    const prefectureSubNode = wrapper.findAll('div.TheaterPrefectureSub')
    expect(prefectureSubNode).toHaveLength(1)
    expect(prefectureSubNode.at(0).text()).toEqual(data.sub)

    const theaterNodes = wrapper.findAllComponents(Theater)
    expect(theaterNodes).toHaveLength(data.theater.length)
    if (data.theater && data.theater.length > 0) {
      data.theater.forEach(function (theater, theaterIdx) {
        const theaterNode = theaterNodes.at(theaterIdx)
        expect(theaterNode.props().data).toEqual(theater)
      })
    }
  })
})
