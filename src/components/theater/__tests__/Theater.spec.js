import axios from 'axios'
import Theater from '@/components/theater/Theater'
import TopMenu from '@/components/common/TopMenu'
import { topMenu } from '@/components/common/TopMenuData'
import { mount } from '@vue/test-utils'
import Heading from '@/components/common/Heading'
import { headingData } from '@/components/theater/HeadingData'
import TheaterHeading from '@/components/theater/TheaterHeading'
import { theaterHeadingData } from '@/components/theater/TheaterHeadingData'

jest.mock('axios')

describe('Theaterコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=theater&front_type=vue':
          return {
            data: topMenu
          }
      }
    })
  })

  it('レンダリングのテスト', async () => {
    const wrapper = mount(Theater)
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

    const tlTheaterHeadingNode = theaterHeadingNodes.at(0)
    expect(tlTheaterHeadingNode.props().data).toEqual(theaterHeadingData.TL)
    const fbtlTheaterHeadingNode = theaterHeadingNodes.at(1)
    expect(fbtlTheaterHeadingNode.props().data).toEqual(theaterHeadingData.FBTL)
  })
})
