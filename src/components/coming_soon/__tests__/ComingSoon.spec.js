import axios from 'axios'
import { topMenu } from '@/components/common/TopMenuData'
import { mount } from '@vue/test-utils'
import ComingSoon from '@/components/coming_soon/ComingSoon'
import TopMenu from '@/components/common/TopMenu'
import Heading from '@/components/common/Heading'
import { comingSoonHeadingData } from '@/components/coming_soon/ComingSoonHeadingData'
import LargeButtonContainer from '@/components/common/LargeButtonContainer'
import { comingSoonLargeButton } from '@/components/coming_soon/ComingSoonLargeButtonData'
import MovieContainer from '@/components/common/MovieContainer'
import { comingSoon } from '@/components/coming_soon/ComingSoonData'

jest.mock('axios')

describe('ComingSoonコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=coming_soon&front_type=vue':
          return {
            data: topMenu
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/large_button?front_type=vue&page_type=coming_soon':
          return {
            data: comingSoonLargeButton
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/coming_soon?front_type=vue':
          return {
            data: comingSoon
          }
      }
    })
  })
  it('レンダリングのテスト', async () => {
    const wrapper = mount(ComingSoon)
    await wrapper.vm.$nextTick()

    const topMenuNode = wrapper.findAllComponents(TopMenu)
    expect(topMenuNode).toHaveLength(1)
    expect(topMenuNode.at(0).props().data).toEqual(topMenu)

    const headingNodes = wrapper.findAllComponents(Heading)
    expect(headingNodes).toHaveLength(Object.keys(comingSoonHeadingData).length)
    const comingSoonHeadingNode = headingNodes.at(0)
    expect(comingSoonHeadingNode.props().data).toEqual(comingSoonHeadingData.CS)

    const movieContainerNode = wrapper.findAllComponents(MovieContainer)
    expect(movieContainerNode).toHaveLength(1)
    expect(movieContainerNode.at(0).props().data).toEqual(comingSoon)

    const comingSoonLargeButtonContainer = wrapper.findAllComponents(LargeButtonContainer)
    expect(comingSoonLargeButtonContainer).toHaveLength(1)
    expect(comingSoonLargeButtonContainer.at(0).props().data).toEqual(comingSoonLargeButton)
  })
})
