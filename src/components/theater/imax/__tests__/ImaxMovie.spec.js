import { shallowMount } from '@vue/test-utils'
import { ranking } from '@/components/top/ranking/rankingData'
import ImaxMovie from '@/components/theater/imax/ImaxMovie'
import { imaxTopData } from '@/components/theater/imax/ImaxTopData'

describe('ImaxMovieコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = {
      movieTitleImgUrl: imaxTopData.nowShowingImgUrl,
      movieTitleBgImgUrl: imaxTopData.nowShowingBgImgUrl,
      movie: ranking
    }
    const wrapper = shallowMount(
      ImaxMovie,
      {
        propsData: {
          data
        }
      }
    )

    const imaxMovieImgNodes = wrapper.findAll('img.ImaxMovieImg')
    expect(imaxMovieImgNodes).toHaveLength(wrapper.vm.ImaxMovieConst.imaxMovieImgWrapCount)
    data.movie.slice(0, wrapper.vm.ImaxMovieConst.imaxMovieImgWrapCount).forEach(function (imaxMovie, imaxMovieIdx) {
      const imaxMovieImgNode = imaxMovieImgNodes.at(imaxMovieIdx)
      expect(imaxMovieImgNode.attributes().src).toEqual(imaxMovie.imgUrl)
    })
  })
})
