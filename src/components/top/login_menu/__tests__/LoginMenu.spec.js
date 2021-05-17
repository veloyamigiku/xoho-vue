import { loginMenu } from '@/components/top/login_menu/LoginMenuData'
import { shallowMount } from '@vue/test-utils'
import LoginMenu from '@/components/top/login_menu/LoginMenu'
import LoginMenuButton from '@/components/top/login_menu/LoginMenuButton'

describe('LoginMenuコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = loginMenu
    const wrapper = shallowMount(
      LoginMenu,
      {
        propsData: {
          data
        }
      }
    )

    const loginMenuButtonNodes = wrapper.findAllComponents(LoginMenuButton)
    expect(loginMenuButtonNodes).toHaveLength(data.button.length)
    data.button.forEach(function (loginMenuButton, loginMenuButtonIdx) {
      const loginMenuButtonNode = loginMenuButtonNodes.at(loginMenuButtonIdx)
      expect(loginMenuButtonNode.props().data).toEqual(loginMenuButton)
    })

    const loginMenuLinkNode = wrapper.findAll('a.LoginMenuLink')
    expect(loginMenuLinkNode).toHaveLength(1)
    expect(loginMenuLinkNode.at(0).text()).toEqual(data.link.label)
    expect(loginMenuLinkNode.at(0).attributes().href).toEqual(data.link.url)
  })
})
