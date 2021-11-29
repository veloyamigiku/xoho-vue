import { shallowMount } from '@vue/test-utils'
import { imaxTopData } from '../ImaxTopData'
import ImaxContent from '@/components/theater/imax/ImaxContent'
import ImaxTheater from '@/components/theater/imax/ImaxTheater'
import { imaxTheaterData } from '../ImaxTheaterData'
import axios from 'axios'

jest.mock('axios')

describe('ImaxContentコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/theater?type=6&front_type=react':
          return {
            data: imaxTheaterData
          }
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/theater?type=1&front_type=react':
          return {
            data: imaxTheaterData
          }
      }
    })
  })
  it('プロップスのテスト', async () => {
    const wrapper = shallowMount(
      ImaxContent,
      {
        propsData: {
          data: imaxTopData
        }
      }
    )
    await wrapper.vm.$nextTick()
    const imaxTheaterNodes = wrapper.findAllComponents(ImaxTheater)
    expect(imaxTheaterNodes).toHaveLength(2)
    const imaxLaserTheaterNode = imaxTheaterNodes.at(0)
    const imaxLaserTheaterData = {
      introImgUrl: imaxTopData.lasertIntroImgUrl,
      theater: imaxTheaterData
    }
    expect(imaxLaserTheaterNode.props().data).toEqual(imaxLaserTheaterData)

    const imaxDigitalTheaterNode = imaxTheaterNodes.at(1)
    const imaxDigitalTheaterData = {
      introImgUrl: imaxTopData.introImgUrl,
      theater: imaxTheaterData
    }
    expect(imaxDigitalTheaterNode.props().data).toEqual(imaxDigitalTheaterData)
  })
})
