import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import App from '@/App'
import Top from '@/components/top/Top'
import NowPlaying from '@/components/now_playing/NowPlaying'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Appコンポーネント', () => {
  it('ルーティングのテスト_NowPlaying', async () => {
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
    router.push('/movie/now_playing')
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(NowPlaying).exists()).toBe(true)
  })

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

    router.push('/')
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(Top).exists()).toBe(true)
  })
})
