import { shallowMount } from '@vue/test-utils'
import { imaxTopData } from '@/components/theater/imax/ImaxTopData'
import ImaxInfoText from '@/components/theater/imax/ImaxInfoText'

describe('ImaxInfoTextコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = imaxTopData.laser.info[0]
    const wrapper = shallowMount(
      ImaxInfoText,
      {
        propsData: {
          data
        }
      }
    )

    const headerNode = wrapper.findAll('div.ImaxInfoTextHeader')
    expect(headerNode).toHaveLength(1)
    expect(headerNode.at(0).text()).toEqual(data.header)

    const bodyNode = wrapper.findAll('div.ImaxInfoTextBody')
    expect(bodyNode).toHaveLength(1)
    expect(bodyNode.at(0).text()).toEqual(data.body)
  })
})
