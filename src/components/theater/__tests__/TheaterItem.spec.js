import { shallowMount } from '@vue/test-utils'
import { theaterData } from '@/components/theater/TheaterData'
import TheaterItem from '@/components/theater/TheaterItem'
import TheaterHeader from '@/components/theater/TheaterHeader'
import TheaterContent from '@/components/theater/TheaterContent'

describe('TheaterItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = theaterData[0]
    const wrapper = shallowMount(
      TheaterItem,
      {
        propsData: {
          data
        }
      }
    )

    const theaterHeaderNode = wrapper.findAllComponents(TheaterHeader)
    expect(theaterHeaderNode).toHaveLength(1)
    expect(theaterHeaderNode.at(0).props().data).toEqual(data.header)

    const TheaterContentNode = wrapper.findAllComponents(TheaterContent)
    expect(TheaterContentNode).toHaveLength(1)
    expect(TheaterContentNode.at(0).props().data).toEqual(data.prefecture)
  })
})
