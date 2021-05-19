import axios from 'axios'
import { topMenu } from '@/components/common/TopMenuData'
import { loginMenu } from '@/components/top/login_menu/LoginMenuData'
import { topBanner } from '@/components/top/top_banner/TopBannerData'
import { topHeadingData } from '@/components/top/TopHeadingData'
import { information } from '@/components/top/information/InformationData.js'
import { mount } from '@vue/test-utils'
import Top from '@/components/top/Top'
import TopMenu from '@/components/common/TopMenu'
import LoginMenu from '@/components/top/login_menu/LoginMenu'
import TopBanner from '@/components/top/top_banner/TopBanner'
import Heading from '@/components/common/Heading'
import Information from '@/components/top/information/Information'

jest.mock('axios')

describe('Topコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu':
          return {
            data: topMenu
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/login_menu':
          return {
            data: loginMenu
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_banner':
          return {
            data: topBanner
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/information':
          return {
            data: information
          }
      }
    })
  })
  it('レンダリングのテスト', async () => {
    const wrapper = mount(Top)
    await wrapper.vm.$nextTick()
    const topMenuNode = wrapper.findAllComponents(TopMenu)
    expect(topMenuNode).toHaveLength(1)
    expect(topMenuNode.at(0).props().data).toEqual(topMenu)

    const loginMenuNode = wrapper.findAllComponents(LoginMenu)
    expect(loginMenuNode).toHaveLength(1)
    expect(loginMenuNode.at(0).props().data).toEqual(loginMenu)

    const topBannerNode = wrapper.findAllComponents(TopBanner)
    expect(topBannerNode).toHaveLength(1)
    expect(topBannerNode.at(0).props().data).toEqual(topBanner)

    const headingNodes = wrapper.findAllComponents(Heading)
    expect(headingNodes).toHaveLength(Object.keys(topHeadingData).length)

    const rankingHeadingNode = headingNodes.at(0)
    expect(rankingHeadingNode.props().data).toEqual(topHeadingData.R)

    const infoHeadingNode = headingNodes.at(1)
    expect(infoHeadingNode.props().data).toEqual(topHeadingData.I)

    const informationNode = wrapper.findAllComponents(Information)
    expect(informationNode).toHaveLength(1)
    expect(informationNode.at(0).props().data).toEqual(information)

    const importantInfoHeadingNode = headingNodes.at(2)
    expect(importantInfoHeadingNode.props().data).toEqual(topHeadingData.II)

    const serviceHeadingNode = headingNodes.at(3)
    expect(serviceHeadingNode.props().data).toEqual(topHeadingData.S)
  })
})
