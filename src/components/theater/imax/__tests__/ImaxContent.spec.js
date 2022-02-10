import { shallowMount } from '@vue/test-utils'
import { imaxTopData } from '@/components/theater/imax/ImaxTopData'
import ImaxContent from '@/components/theater/imax/ImaxContent'
import ImaxTheater from '@/components/theater/imax/ImaxTheater'
import { imaxTheaterData } from '@/components/theater/imax/ImaxTheaterData'
import { getTheaters } from '@/components/theater/imax/ImaxUtils'
import ImaxAbout from '@/components/theater/imax/ImaxAbout'
import { ranking } from '@/components/top/ranking/rankingData'
import ImaxMovie from '@/components/theater/imax/ImaxMovie'

describe('ImaxContentコンポーネント', () => {
  it('プロップスのテスト', () => {
    const wrapper = shallowMount(
      ImaxContent,
      {
        propsData: {
          data: {
            topData: imaxTopData,
            theaterData: {
              6: imaxTheaterData[0],
              1: imaxTheaterData[1]
            }
          }
        }
      }
    )
    const imaxTheaterNodes = wrapper.findAllComponents(ImaxTheater)
    expect(imaxTheaterNodes).toHaveLength(2)
    const imaxLaserTheaterNode = imaxTheaterNodes.at(0)
    const imaxLaserTheaterData = {
      imaxType: 6,
      introImgUrl: imaxTopData.lasertIntroImgUrl,
      theater: getTheaters(imaxTheaterData[0]),
      theaterAbout: {
        title: 'IMAX®レーザーとは'
      }
    }
    expect(imaxLaserTheaterNode.props().data).toEqual(imaxLaserTheaterData)

    const imaxDigitalTheaterNode = imaxTheaterNodes.at(1)
    const imaxDigitalTheaterData = {
      imaxType: 1,
      introImgUrl: imaxTopData.introImgUrl,
      theater: getTheaters(imaxTheaterData[1]),
      theaterAbout: {
        title: 'IMAX®とは'
      }
    }
    expect(imaxDigitalTheaterNode.props().data).toEqual(imaxDigitalTheaterData)

    const imaxMovieData = {
      movieTitleImgUrl: imaxTopData.nowShowingImgUrl,
      movieTitleBgImgUrl: imaxTopData.nowShowingBgImgUrl,
      movie: ranking
    }
    const imaxMovieNode = wrapper.findAllComponents(ImaxMovie)
    expect(imaxMovieNode).toHaveLength(1)
    expect(imaxMovieNode.at(0).props().data).toEqual(imaxMovieData)

    const imaxAboutNodes = wrapper.findAllComponents(ImaxAbout)
    expect(imaxAboutNodes).toHaveLength(2)
    const imaxLaserAboutNode = imaxAboutNodes.at(0)
    expect(imaxLaserAboutNode.props().data).toEqual(imaxTopData.laser)
    const imaxDigitalAboutNode = imaxAboutNodes.at(1)
    expect(imaxDigitalAboutNode.props().data).toEqual(imaxTopData.imax)
  })
})
