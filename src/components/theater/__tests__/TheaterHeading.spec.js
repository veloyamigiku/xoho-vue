import { shallowMount } from '@vue/test-utils'
import TheaterHeading from '@/components/theater/TheaterHeading'
import { theaterHeadingData } from '@/components/theater/TheaterHeadingData'

describe('TheaterHeadingコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = theaterHeadingData.TL
    const wrapper = shallowMount(
      TheaterHeading,
      {
        propsData: {
          data
        }
      }
    )

    const theaterHeadingTitleNode = wrapper.findAll('div.TheaterHeadingTitle')
    expect(theaterHeadingTitleNode).toHaveLength(1)
    expect(theaterHeadingTitleNode.at(0).text()).toContain(data.title)

    const theaterHeadingSubNode = wrapper.findAll('div.TheaterHeadingSub')
    expect(theaterHeadingSubNode).toHaveLength(1)
    expect(theaterHeadingSubNode.at(0).text()).toEqual(data.sub)
  })
})
