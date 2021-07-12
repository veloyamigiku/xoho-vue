import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import App from '@/App'
import Top from '@/components/top/Top'
import NowPlaying from '@/components/now_playing/NowPlaying'
import ComingSoon from '@/components/coming_soon/ComingSoon'
import TheaterTop from '@/components/theater/TheaterTop'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Appコンポーネント', () => {
  it('ルーティングのテスト_TheaterTop', async () => {
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
    router.push('/theater')
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(TheaterTop).exists()).toBe(true)
  })
  it('ルーティングのテスト_ComingSoon', async () => {
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
    router.push('/movie/coming_soon')
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(ComingSoon).exists()).toBe(true)
  })
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
