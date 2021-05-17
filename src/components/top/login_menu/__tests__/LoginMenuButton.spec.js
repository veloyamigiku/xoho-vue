import { loginMenu } from '@/components/top/login_menu/LoginMenuData'
import { shallowMount } from '@vue/test-utils'
import LoginMenuButton from '@/components/top/login_menu/LoginMenuButton'

describe('LoginMenuButtonコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = loginMenu.button[0]
    const wrapper = shallowMount(
      LoginMenuButton,
      {
        propsData: {
          data
        }
      }
    )

    const loginMenuButtonANode = wrapper.findAll('a.LoginMenuButtonA')
    expect(loginMenuButtonANode).toHaveLength(1)
    expect(loginMenuButtonANode.at(0).text()).toEqual(data.label)
    expect(loginMenuButtonANode.at(0).attributes().href).toEqual(data.url)
  })
})
