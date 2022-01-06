import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import App from '@/App'
import '@/fontawesome'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Appコンポーネント', () => {
  it('ルーティングのテスト', () => {
    const router = new VueRouter({
      mode: 'history',
      routes
    })
    const wrapper = shallowMount(
      App,
      {
        localVue,
        router
      }
    )

    var pathComponentNameMap = {}
    wrapper.vm.$router.options.routes.forEach(function (route) {
      const path = route.path
      const componentName = route.component.name
      pathComponentNameMap[path] = componentName
    })
    expect(pathComponentNameMap['/']).toEqual('Top')
    expect(pathComponentNameMap['/movie/now_playing']).toEqual('NowPlaying')
    expect(pathComponentNameMap['/movie/coming_soon']).toEqual('ComingSoon')
    expect(pathComponentNameMap['/movie/:id']).toEqual('MovieTop')
    expect(pathComponentNameMap['/theater']).toEqual('TheaterTop')
    expect(pathComponentNameMap['/theater/imax']).toEqual('ImaxTop')
  })
})
