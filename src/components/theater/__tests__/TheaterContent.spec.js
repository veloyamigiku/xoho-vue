import { theaterData } from '@/components/theater/TheaterData'
import { shallowMount } from '@vue/test-utils'
import TheaterContent from '@/components/theater/TheaterContent'
import TheaterPrefecture from '@/components/theater/TheaterPrefecture'

describe('TheaterContentコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = theaterData[0].prefecture
    const wrapper = shallowMount(
      TheaterContent,
      {
        propsData: {
          data
        }
      }
    )

    const theaterPrefectureNodes = wrapper.findAllComponents(TheaterPrefecture)
    expect(theaterPrefectureNodes).toHaveLength(data.length)
    data.forEach(function (theaterPrefecture, theaterPrefectureIdx) {
      const theaterPrefectureNode = theaterPrefectureNodes.at(theaterPrefectureIdx)
      expect(theaterPrefectureNode.props().data).toEqual(theaterPrefecture)
    })
  })
})
