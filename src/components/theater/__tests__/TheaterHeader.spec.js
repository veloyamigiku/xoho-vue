import { theaterData } from '@/components/theater/TheaterData'
import { shallowMount } from '@vue/test-utils'
import TheaterHeader from '@/components/theater/TheaterHeader'

describe('TheaterHeaderコンポーネント', () => {
  it('イベントのテスト', () => {
    const data = theaterData[0].header
    const clickMock = jest.fn()
    const wrapper = shallowMount(
      TheaterHeader,
      {
        propsData: {
          data,
          click: clickMock
        }
      }
    )

    const theaterHeaderNode = wrapper.findAll('div.TheaterHeader')
    expect(theaterHeaderNode).toHaveLength(1)
    theaterHeaderNode.at(0).trigger('click')
    expect(clickMock.mock.calls).toHaveLength(1)
  })

  it('プロップスのテスト', () => {
    const data = theaterData[0].header
    const wrapper = shallowMount(
      TheaterHeader,
      {
        propsData: {
          data
        }
      }
    )

    const theaterHeaderTitleNode = wrapper.findAll('div.TheaterHeaderTitle')
    expect(theaterHeaderTitleNode).toHaveLength(1)
    expect(theaterHeaderTitleNode.at(0).text()).toEqual(data.title)

    const theaterHeaderSubNode = wrapper.findAll('div.TheaterHeaderSub')
    expect(theaterHeaderSubNode).toHaveLength(1)
    expect(theaterHeaderSubNode.at(0).text()).toEqual(data.sub)

    const theaterHeaderOptionNode = wrapper.findAll('div.TheaterHeaderOption')
    expect(theaterHeaderOptionNode).toHaveLength(1)
    expect(theaterHeaderOptionNode.at(0).text()).toEqual(data.option)
  })
})
