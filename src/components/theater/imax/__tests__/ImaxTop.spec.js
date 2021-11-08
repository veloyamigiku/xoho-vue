import { shallowMount } from '@vue/test-utils'
import ImaxTop from '@/components/theater/imax/ImaxTop'
import ImaxHeader from '@/components/theater/imax/ImaxHeader'
import ImaxContent from '@/components/theater/imax/ImaxContent'
import { imaxTopData } from '@/components/theater/imax/ImaxTopData'
import axios from 'axios'

jest.mock('axios')

describe('ImaxTopコンポーネント', () => {
  beforeEach(() => {
    axios.get.mockImplementation(async (url) => {
      switch (url) {
        case 'https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/imax':
          return {
            data: imaxTopData
          }
      }
    })
  })
  it('レンダリングのテスト', async () => {
    const wrapper = shallowMount(ImaxTop)
    await wrapper.vm.$nextTick()

    const imaxHeaderNode = wrapper.findAllComponents(ImaxHeader)
    expect(imaxHeaderNode).toHaveLength(1)
    expect(imaxHeaderNode.at(0).props().data).toEqual(imaxTopData)

    const imaxContentNode = wrapper.findAllComponents(ImaxContent)
    expect(imaxContentNode).toHaveLength(1)
    expect(imaxContentNode.at(0).props().data).toEqual(imaxTopData)
  })
})
