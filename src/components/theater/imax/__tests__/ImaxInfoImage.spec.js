import { shallowMount } from '@vue/test-utils'
import { imaxTopData } from '@/components/theater/imax/ImaxTopData'
import ImaxInfoImage from '@/components/theater/imax/ImaxInfoImage'

describe('ImaxInfoImageコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = imaxTopData.imax.info[0]
    const wrapper = shallowMount(
      ImaxInfoImage,
      {
        propsData: {
          data
        }
      }
    )
    const titleImgNode = wrapper.findAll('img.ImaxInfoImageTitle')
    expect(titleImgNode).toHaveLength(1)
    expect(titleImgNode.at(0).attributes().src).toEqual(data.titleImgUrl)

    const subTitleImgNode = wrapper.findAll('img.ImaxInfoImageSubTitle')
    expect(subTitleImgNode).toHaveLength(1)
    expect(subTitleImgNode.at(0).attributes().src).toEqual(data.subTitleImgUrl)

    const imgNode = wrapper.findAll('img.ImaxInfoImageImg')
    expect(imgNode).toHaveLength(1)
    expect(imgNode.at(0).attributes().src).toEqual(data.imgUrl)

    const textImgNode = wrapper.findAll('img.ImaxInfoImageText')
    expect(textImgNode).toHaveLength(1)
    expect(textImgNode.at(0).attributes().src).toEqual(data.textImgUrl)
  })
})
