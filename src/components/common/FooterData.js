import { commonData } from '@/components/common/CommonData'

export const FooterData = {
  link: [
    {
      label: '企業情報',
      url: 'http://www.tohocinemas.co.jp/'
    },
    {
      label: 'サイトマップ',
      url: commonData.url + '/info/sitemap.html'
    },
    {
      label: '個人情報の取扱いについて',
      url: commonData.url + '/info/privacy.html'
    },
    {
      label: '特定商取引法に基づく表記',
      url: commonData.url + '/info/business_deal.html'
    },
    {
      label: 'ご利用に際して',
      url: commonData.url + '/info/help.html'
    },
    {
      label: 'vit®利用規約',
      url: commonData.url + '/vit/legal_notice.html'
    }
  ],
  snsLink: [
    {
      icon: ['fab', 'fa-youtube'],
      url: 'https://www.youtube.com/user/TOHOCINEMASmagazine'
    },
    {
      icon: ['fab', 'fa-line'],
      url: 'https://line.me/R/ti/p/%40tohocinemas'
    },
    {
      icon: ['fab', 'fa-twitter'],
      url: 'https://twitter.com/tohocinemas_m'
    },
    {
      icon: ['fab', 'fa-facebook-square'],
      url: 'https://www.facebook.com/tohocinemasmagagine/'
    },
    {
      icon: ['fab', 'fa-instagram'],
      url: 'https://www.instagram.com/tohocinemas_official/'
    }
  ]
}
