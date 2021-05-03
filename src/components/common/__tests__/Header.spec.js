import { shallowMount } from '@vue/test-utils'
import Header from '@/components/common/Header'

describe('Headerコンポーネント', () => {
  it('プロップスのテスト', () => {
    const wrapper = shallowMount(Header)

    const headerImgNode = wrapper.findAll('div.Header img')
    expect(headerImgNode).toHaveLength(1)
    expect(headerImgNode.at(0).attributes().src).toBe('https://lh3.googleusercontent.com/pw/ACtC-3eyqUIGUbKYieiWE7ac91OI4ztroZjKCbJAhH6IUiqqhK4_Gzcc1OmVTS18H92lm-hx1vJ6U_Ytf_F25a2QLvPh1xb0Xl0OvR6QhYePBfOBCLoUQglFFZUifHRYh-HpqHSBu8Fs-55QZFJs-ZEjAqNW=w200-h64-no?authuser=0')
  })
})
