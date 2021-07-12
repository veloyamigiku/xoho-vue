import { theaterData } from '@/components/theater/TheaterData'
import { shallowMount } from '@vue/test-utils'
import TheaterContainer from '@/components/theater/TheaterContainer'
import TheaterItem from '@/components/theater/TheaterItem'

describe('TheaterContainerコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = theaterData
    const wrapper = shallowMount(
      TheaterContainer,
      {
        propsData: {
          data
        }
      }
    )

    const theaterItemNodes = wrapper.findAllComponents(TheaterItem)
    expect(theaterItemNodes).toHaveLength(data.length)
    data.forEach(function (theaterItem, theaterItemIdx) {
      const theaterItemNode = theaterItemNodes.at(theaterItemIdx)
      expect(theaterItemNode.props().data).toEqual(theaterItem)
    })
  })
})
