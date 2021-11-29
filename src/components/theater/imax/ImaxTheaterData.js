import { theaterData } from '../TheaterData'

export const imaxTheaterData = {
  introImgUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLWF6sxXRe_dW5yayVt3OKS10006Sj-popwula0jcz76oBXro2ulAK6ufXTsSK_LQzc_6FLJfoJmvkquyKkBbT7ifMTnnqw7AwsvUpHIhuZrKhvscuHcEJJCRh86X-hjRuDTirSNpGDgWO2P9LG5RqCt=w471-h74-no?authuser=0',
  theater: [
    {
      header: theaterData[1].header,
      prefecture: [
        {
          name: theaterData[1].prefecture[1].name,
          sub: theaterData[1].prefecture[1].sub,
          theater: [
            theaterData[1].prefecture[1].theater[2]
          ]
        },
        {
          name: theaterData[1].prefecture[2].name,
          sub: theaterData[1].prefecture[2].sub,
          theater: [
            theaterData[1].prefecture[2].theater[4]
          ]
        }
      ]
    },
    {
      header: theaterData[3].header,
      prefecture: [
        {
          name: theaterData[3].prefecture[2].name,
          sub: theaterData[3].prefecture[2].sub,
          theater: [
            theaterData[3].prefecture[2].theater[0]
          ]
        }
      ]
    }
  ]
}
