import { mount } from '@vue/test-utils'
import axios from 'axios'
import NowPlaying from '@/components/now_playing/NowPlaying'
import { topMenu } from '@/components/common/TopMenuData'
import TopMenu from '@/components/common/TopMenu'
import Heading from '@/components/common/Heading'
import { nowPlayingHeadingData } from '@/components/now_playing/NowPlayingHeadingData'
import MovieGroup from '@/components/common/MovieGroup'
import { nowPlaying } from '@/components/now_playing/NowPlayingData'

jest.mock('axios')

describe('NowPlayingコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu?active_page=now_playing&front_type=vue':
          return {
            data: topMenu
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/now_playing?front_type=vue':
          return {
            data: nowPlaying
          }
      }
    })
  })

  it('レンダリングのテスト', async () => {
    const wrapper = mount(NowPlaying)
    await wrapper.vm.$nextTick()

    const topMenuNode = wrapper.findAllComponents(TopMenu)
    expect(topMenuNode).toHaveLength(1)
    expect(topMenuNode.at(0).props().data).toEqual(topMenu)

    const headingNodes = wrapper.findAllComponents(Heading)
    expect(headingNodes).toHaveLength(Object.keys(nowPlayingHeadingData).length)

    const nowPlayingHeadingNode = headingNodes.at(0)
    expect(nowPlayingHeadingNode.props().data).toEqual(nowPlayingHeadingData.NP)
    const movieGroupNode = wrapper.findAllComponents(MovieGroup)
    expect(movieGroupNode).toHaveLength(1)
    expect(movieGroupNode.at(0).props().data).toEqual(nowPlaying)
  })
})
