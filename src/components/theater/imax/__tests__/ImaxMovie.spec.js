import { shallowMount } from '@vue/test-utils'
import { ranking } from '@/components/top/ranking/rankingData'
import ImaxMovie from '@/components/theater/imax/ImaxMovie'

describe('ImaxMovieコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = ranking
    const wrapper = shallowMount(
      ImaxMovie,
      {
        propsData: {
          data
        }
      }
    )

    const imaxMovieImgNodes = wrapper.findAll('img.ImaxMovieImg')
    expect(imaxMovieImgNodes).toHaveLength(wrapper.vm.$data.movieItemCount)
    data.slice(0, wrapper.vm.$data.movieItemCount).forEach(function (imaxMovie, imaxMovieIdx) {
      const imaxMovieImgNode = imaxMovieImgNodes.at(imaxMovieIdx)
      expect(imaxMovieImgNode.attributes().src).toEqual(imaxMovie.imgUrl)
    })
  })
})
