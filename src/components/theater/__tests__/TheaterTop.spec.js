import axios from 'axios'
import TheaterTop from '@/components/theater/TheaterTop'
import TopMenu from '@/components/common/TopMenu'
import { topMenu } from '@/components/common/TopMenuData'
import { mount } from '@vue/test-utils'
import Heading from '@/components/common/Heading'
import { headingData } from '@/components/theater/HeadingData'
import TheaterHeading from '@/components/theater/TheaterHeading'
import { theaterHeadingData } from '@/components/theater/TheaterHeadingData'
import LargeButtonContainer from '@/components/common/LargeButtonContainer'
import { theaterLargeButton } from '@/components/theater/TheaterLargeButtonData'
import TheaterContainer from '@/components/theater/TheaterContainer'
import { theaterData } from '@/components/theater/TheaterData'

jest.mock('axios')

describe('Theaterコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=theater&front_type=vue':
          return {
            data: topMenu
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=vue&page_type=theater':
          return {
            data: theaterLargeButton
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/theater?type=all&front_type=vue':
          return {
            data: theaterData
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/theater?type=all_type&front_type=vue':
          return {
            data: theaterData
          }
      }
    })
  })

  it('レンダリングのテスト', async () => {
    const wrapper = mount(TheaterTop)
    await wrapper.vm.$nextTick()

    const topMenuNode = wrapper.findAllComponents(TopMenu)
    expect(topMenuNode).toHaveLength(1)
    expect(topMenuNode.at(0).props().data).toEqual(topMenu)

    const headingNodes = wrapper.findAllComponents(Heading)
    expect(headingNodes).toHaveLength(Object.keys(headingData).length)

    const nhHeadingNode = headingNodes.at(0)
    expect(nhHeadingNode.props().data).toEqual(headingData.NH)
    const pbttHeadingNode = headingNodes.at(1)
    expect(pbttHeadingNode.props().data).toEqual(headingData.PBTT)

    const theaterHeadingNodes = wrapper.findAllComponents(TheaterHeading)
    expect(theaterHeadingNodes).toHaveLength(Object.keys(theaterHeadingData).length)

    const theaterContainerNodes = wrapper.findAllComponents(TheaterContainer)
    expect(theaterContainerNodes).toHaveLength(2)

    const tlTheaterHeadingNode = theaterHeadingNodes.at(0)
    expect(tlTheaterHeadingNode.props().data).toEqual(theaterHeadingData.TL)

    const tlTheaterContainerNode = theaterContainerNodes.at(0)
    expect(tlTheaterContainerNode.props().data).toEqual(theaterData)

    const fbtlTheaterHeadingNode = theaterHeadingNodes.at(1)
    expect(fbtlTheaterHeadingNode.props().data).toEqual(theaterHeadingData.FBTL)

    const fbtlTheaterContainerNode = theaterContainerNodes.at(1)
    expect(fbtlTheaterContainerNode.props().data).toEqual(theaterData)

    const largeButtonContainer = wrapper.findAllComponents(LargeButtonContainer)
    expect(largeButtonContainer).toHaveLength(1)
    expect(largeButtonContainer.at(0).props().data).toEqual(theaterLargeButton)
  })
})
