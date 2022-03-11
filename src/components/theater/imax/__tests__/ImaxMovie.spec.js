import { shallowMount } from '@vue/test-utils'
import { ranking } from '@/components/top/ranking/rankingData'
import ImaxMovie from '@/components/theater/imax/ImaxMovie'
import { imaxTopData } from '@/components/theater/imax/ImaxTopData'

describe('ImaxMovieコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = {
      movieTitleImgUrl: imaxTopData.nowShowingImgUrl,
      movieTitleBgImgUrl: imaxTopData.nowShowingBgImgUrl,
      movieLeftIcon: imaxTopData.nowShowingLeftIcon,
      movieRightIcon: imaxTopData.nowShowingRightIcon,
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

    const imaxMovieRootNode = wrapper.findAll('div.ImaxMovieRoot')
    expect(imaxMovieRootNode).toHaveLength(1)
    expect(imaxMovieRootNode.at(0).element.style.backgroundImage).toContain(data.movieTitleBgImgUrl)
    const imaxMovieTitleImgNode = wrapper.findAll('img.ImaxMovieTitleImg')
    expect(imaxMovieTitleImgNode).toHaveLength(1)
    expect(imaxMovieTitleImgNode.at(0).attributes().src).toEqual(data.movieTitleImgUrl)
    const imaxMovieLeftIcon = wrapper.findAll('.ImaxMovieLeftIcon')
    expect(imaxMovieLeftIcon).toHaveLength(1)
    expect(imaxMovieLeftIcon.at(0).attributes().icon.split(',')).toEqual(data.movieLeftIcon)
    const imaxMovieImgNodes = wrapper.findAll('img.ImaxMovieImg')
    expect(imaxMovieImgNodes).toHaveLength(wrapper.vm.ImaxMovieConst.imaxMovieImgWrapCount)
    data.movie.slice(0, wrapper.vm.ImaxMovieConst.imaxMovieImgWrapCount).forEach(function (imaxMovie, imaxMovieIdx) {
      const imaxMovieImgNode = imaxMovieImgNodes.at(imaxMovieIdx)
      expect(imaxMovieImgNode.attributes().src).toEqual(imaxMovie.imgUrl)
    })
    const imaxMovieRightIcon = wrapper.findAll('.ImaxMovieRightIcon')
    expect(imaxMovieRightIcon).toHaveLength(1)
    expect(imaxMovieRightIcon.at(0).attributes().icon.split(',')).toEqual(data.movieRightIcon)
  })
})
