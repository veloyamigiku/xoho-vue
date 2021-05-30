import axios from 'axios'
import { topMenu } from '@/components/common/TopMenuData'
import { loginMenu } from '@/components/top/login_menu/LoginMenuData'
import { topBanner } from '@/components/top/top_banner/TopBannerData'
import { topHeadingData } from '@/components/top/TopHeadingData'
import { information } from '@/components/top/information/InformationData.js'
import { importantInformation } from '@/components/top/important_information/ImportantInformationData'
import { box } from '@/components/top/box/BoxData'
import { service } from '@/components/top/service/ServiceData'
import { mount } from '@vue/test-utils'
import Top from '@/components/top/Top'
import TopMenu from '@/components/common/TopMenu'
import LoginMenu from '@/components/top/login_menu/LoginMenu'
import TopBanner from '@/components/top/top_banner/TopBanner'
import Heading from '@/components/common/Heading'
import Information from '@/components/top/information/Information'
import ImportantInformation from '@/components/top/important_information/ImportantInformation'
import Box from '@/components/top/box/Box'
import Service from '@/components/top/service/Service'

jest.mock('axios')

describe('Topコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?front_type=vue':
          return {
            data: topMenu
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/login_menu?front_type=vue':
          return {
            data: loginMenu
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_banner?front_type=vue':
          return {
            data: topBanner
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/information?front_type=vue':
          return {
            data: information
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/important_information?front_type=vue':
          return {
            data: importantInformation
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/box?front_type=vue':
          return {
            data: box
          }
        case 'http://localhost:9000/service?front_type=vue':
          return {
            data: service
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

    const importantInformationNode = wrapper.findAllComponents(ImportantInformation)
    expect(importantInformationNode).toHaveLength(1)
    expect(importantInformationNode.at(0).props().data).toEqual(importantInformation)

    const boxNode = wrapper.findAllComponents(Box)
    expect(boxNode).toHaveLength(1)
    expect(boxNode.at(0).props().data).toEqual(box)

    const serviceHeadingNode = headingNodes.at(3)
    expect(serviceHeadingNode.props().data).toEqual(topHeadingData.S)

    const serviceNode = wrapper.findAllComponents(Service)
    expect(serviceNode).toHaveLength(1)
    expect(serviceNode.at(0).props().data).toEqual(service)
  })
})
