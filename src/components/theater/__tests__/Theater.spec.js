import axios from 'axios'
import Theater from '@/components/theater/Theater'
import TopMenu from '@/components/common/TopMenu'
import { topMenu } from '@/components/common/TopMenuData'
import { mount } from '@vue/test-utils'

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
  })
})
