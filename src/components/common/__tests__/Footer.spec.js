import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/common/Footer'
import { FooterData } from '@/components/common/FooterData.js'

describe('Footerコンポーネント', () => {
  it('プロップスのテスト', () => {
    const wrapper = shallowMount(
      Footer,
      {
        propsData: {
          data: FooterData
        }
      }
    )
    const footerLinkANodes = wrapper.findAll('a.FooterLinkA')
    expect(footerLinkANodes).toHaveLength(FooterData.link.length)
    FooterData.link.forEach(function (footerLink, footerLinkIdx) {
      const footerLinkANode = footerLinkANodes.at(footerLinkIdx)
      expect(footerLinkANode.text()).toEqual(footerLink.label)
      expect(footerLinkANode.attributes().href).toEqual(footerLink.url)
    })

    const footerSNSLinkANodes = wrapper.findAll('a.FooterSNSLinkA')
    expect(footerSNSLinkANodes).toHaveLength(FooterData.snsLink.length)
    FooterData.snsLink.forEach(function (footerSNSLink, footerSNSLinkIdx) {
      const footerSNSLinkANode = footerSNSLinkANodes.at(footerSNSLinkIdx)
      expect(footerSNSLinkANode.attributes().href).toEqual(footerSNSLink.url)
    })
  })
})
