import { topBanner } from '../TopBannerData'
import TopBanner from '@/components/top/top_banner/TopBanner'
import TopBannerItem from '@/components/top/top_banner/TopBannerItem'
import { shallowMount } from '@vue/test-utils'

describe('TopBannerコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = topBanner
    const wrapper = shallowMount(
      TopBanner,
      {
        propsData: {
          data
        }
      }
    )

    const topBannerItemNodes = wrapper.findAllComponents(TopBannerItem)
    expect(topBannerItemNodes).toHaveLength(data.length)
    data.forEach(function (topBannerItem, topBannerItemIdx) {
      const topBannerItemNode = topBannerItemNodes.at(topBannerItemIdx)
      expect(topBannerItemNode.props().data).toEqual(topBannerItem)
    })
  })
})
