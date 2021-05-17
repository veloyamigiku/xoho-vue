import { shallowMount } from '@vue/test-utils'
import { topBanner } from '../TopBannerData'
import TopBannerItem from '@/components/top/top_banner/TopBannerItem'

describe('TopBannerItemコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = topBanner[0]
    const wrapper = shallowMount(
      TopBannerItem,
      {
        propsData: {
          data
        }
      }
    )

    const topBannerItemLinkNode = wrapper.findAll('a.TopBannerItemLink')
    expect(topBannerItemLinkNode).toHaveLength(1)
    expect(topBannerItemLinkNode.at(0).attributes().href).toEqual(data.url)
    const topBannerItemImgNode = wrapper.findAll('img.TopBannerItemImg')
    expect(topBannerItemImgNode).toHaveLength(1)
    expect(topBannerItemImgNode.at(0).attributes().src).toEqual(data.imgUrl)
  })
})
