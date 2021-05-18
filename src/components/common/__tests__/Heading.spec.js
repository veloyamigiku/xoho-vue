import { topHeadingData } from '@/components/top/TopHeadingData'
import { shallowMount } from '@vue/test-utils'
import Heading from '@/components/common/Heading'

describe('Headingコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = topHeadingData.R
    const wrapper = shallowMount(
      Heading,
      {
        propsData: {
          data
        }
      }
    )

    const headingTitleNode = wrapper.findAll('div.HeadingTitle')
    expect(headingTitleNode).toHaveLength(1)
    expect(headingTitleNode.at(0).text()).toEqual(data.title)
    const headingSubNode = wrapper.findAll('div.HeadingSub')
    expect(headingSubNode).toHaveLength(1)
    expect(headingSubNode.at(0).text()).toEqual(data.sub)
  })
})
