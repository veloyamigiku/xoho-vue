import { shallowMount } from '@vue/test-utils'
import ImaxAbout from '@/components/theater/imax/ImaxAbout'
import { imaxTopData } from '../ImaxTopData'

describe('ImaxAboutコンポーネント', () => {
  it('プロップスのテスト', () => {
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
})
