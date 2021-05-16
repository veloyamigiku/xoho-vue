import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import App from '@/App'
import Top from '@/components/top/Top'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Appコンポーネント', () => {
  it('ルーティングのテスト_Top', async () => {
    const router = new VueRouter({
      mode: 'history',
      routes
    })
    const wrapper = mount(
      App,
      {
        localVue,
        router
      }
    )

    // ルートパスのルーティングのテストに、画面遷移コードは追加しない。
    // router.push('/')
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(Top).exists()).toBe(true)
  })
})
