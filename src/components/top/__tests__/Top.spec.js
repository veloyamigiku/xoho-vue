import axios from 'axios'
import { topMenu } from '@/components/common/TopMenuData'
import { loginMenu } from '@/components/top/login_menu/LoginMenuData'
import { topBanner } from '@/components/top/top_banner/TopBannerData'
import { mount } from '@vue/test-utils'
import Top from '@/components/top/Top'
import TopMenu from '@/components/common/TopMenu'
import LoginMenu from '@/components/top/login_menu/LoginMenu'
import TopBanner from '@/components/top/top_banner/TopBanner'

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
  })
})
