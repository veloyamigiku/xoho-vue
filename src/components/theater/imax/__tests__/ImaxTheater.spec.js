import { imaxTheaterData } from '../ImaxTheaterData'
import { shallowMount } from '@vue/test-utils'
import ImaxTheater from '@/components/theater/imax/ImaxTheater'
import { getTheaters } from '../ImaxUtils'
import { imaxTopData } from '../ImaxTopData'

describe('ImaxTheaterコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = {
      imaxType: 6,
      introImgUrl: imaxTopData.lasertIntroImgUrl,
      theater: getTheaters(imaxTheaterData[0])
    }
    const wrapper = shallowMount(
      ImaxTheater,
      {
        propsData: {
          data
        }
      }
    )

    const introImgNode = wrapper.findAll('img.ImaxIntroImg')
    expect(introImgNode).toHaveLength(1)
    expect(introImgNode.at(0).attributes().src).toEqual(data.introImgUrl)

    const theaterIntroImgNode = wrapper.findAll('img.ImaxTheaterIntroImg')
    expect(theaterIntroImgNode).toHaveLength(data.theater.length)
    data.theater.forEach(function (theater, theaterIdx) {
      expect(theaterIntroImgNode.at(theaterIdx).attributes().src).toEqual(theater.introImgUrl[data.imaxType])
    })
  })
})
