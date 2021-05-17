import axios from 'axios'
import { topMenu } from '@/components/common/TopMenuData'
import { mount } from '@vue/test-utils'
import Top from '@/components/top/Top'
import TopMenu from '@/components/common/TopMenu'

jest.mock('axios')

describe('Topコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/top_menu':
          return {
            data: topMenu
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
  })
})
