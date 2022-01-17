import { shallowMount } from '@vue/test-utils'
import ImaxAbout from '@/components/theater/imax/ImaxAbout'
import { imaxTopData } from '../ImaxTopData'
import ImaxInfoText from '@/components/theater/imax/ImaxInfoText'
import ImaxInfoImage from '@/components/theater/imax/ImaxInfoImage'

describe('ImaxAboutコンポーネント', () => {
  it('プロップスのテスト_共通', () => {
    const data = imaxTopData.laser
    const wrapper = shallowMount(
      ImaxAbout,
      {
        propsData: {
          data
        }
      }
    )

    const titleImgNode = wrapper.findAll('img.ImaxAboutTitleImg')
    expect(titleImgNode).toHaveLength(1)
    expect(titleImgNode.at(0).attributes().src).toEqual(data.titleImgUrl)

    const imgNode = wrapper.findAll('img.ImaxAboutImg')
    expect(imgNode).toHaveLength(1)
    expect(imgNode.at(0).attributes().src).toEqual(data.imgUrl)

    const textImgNode = wrapper.findAll('img.ImaxAboutTextImg')
    expect(textImgNode).toHaveLength(1)
    expect(textImgNode.at(0).attributes().src).toEqual(data.textImgUrl)

    /* const infoTitleImgNodes = wrapper.findAll('img.ImaxAboutInfoTitleImg')
    expect(infoTitleImgNodes).toHaveLength(data.info.length)

    const infoSubTitleImgNodes = wrapper.findAll('img.ImaxAboutInfoSubTitleImg')
    expect(infoSubTitleImgNodes).toHaveLength(data.info.length)

    const infoImgNodes = wrapper.findAll('img.ImaxAboutInfoImg')
    expect(infoImgNodes).toHaveLength(data.info.length)

    const infoTextImgNodes = wrapper.findAll('img.ImaxAboutInfoTextImg')
    expect(infoTextImgNodes).toHaveLength(data.info.length) */
  })

  it('プロップスのテスト_Laser', () => {
    const data = imaxTopData.laser
    const wrapper = shallowMount(
      ImaxAbout,
      {
        propsData: {
          data
        }
      }
    )

    const imaxInfoTextNodes = wrapper.findAllComponents(ImaxInfoText)
    expect(imaxInfoTextNodes).toHaveLength(data.info.length)
    data.info.forEach(function (info, infoIdx) {
      const imaxInfoTextNode = imaxInfoTextNodes.at(infoIdx)
      expect(imaxInfoTextNode.props().data).toEqual(info)
    })
  })

  it('プロップスのテスト_Digital', () => {
    const data = imaxTopData.imax
    const wrapper = shallowMount(
      ImaxAbout,
      {
        propsData: {
          data
        }
      }
    )

    const imaxInfoImageNodes = wrapper.findAllComponents(ImaxInfoImage)
    expect(imaxInfoImageNodes).toHaveLength(data.info.length)
    data.info.forEach(function (info, infoIdx) {
      const imaxInfoImageNode = imaxInfoImageNodes.at(infoIdx)
      expect(imaxInfoImageNode.props().data).toEqual(info)
    })
  })
})
