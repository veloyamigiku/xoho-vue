import { shallowMount } from '@vue/test-utils'
import { imaxTopData } from '../ImaxTopData'
import ImaxHeader from '@/components/theater/imax/ImaxHeader'

describe('ImaxHeaderコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = imaxTopData
    const wrapper = shallowMount(
      ImaxHeader,
      {
        propsData: {
          data
        }
      }
    )

    const imaxHeaderLogoImgNode = wrapper.findAll('img.ImaxHeaderLogo')
    expect(imaxHeaderLogoImgNode).toHaveLength(1)
    expect(imaxHeaderLogoImgNode.at(0).attributes().src).toEqual(data.logo)

    const imaxHeaderTitleImgNode = wrapper.findAll('img.ImaxHeaderTitleImg')
    expect(imaxHeaderTitleImgNode).toHaveLength(1)
    expect(imaxHeaderTitleImgNode.at(0).attributes().src).toEqual(data.titleImgUrl)
  })
})
