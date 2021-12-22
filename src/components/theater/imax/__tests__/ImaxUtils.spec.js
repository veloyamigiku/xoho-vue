import { imaxTheaterData } from '@/components/theater/imax/ImaxTheaterData'
import { getTheaters } from '@/components/theater/imax/ImaxUtils'

describe('ImaxUtils', () => {
  it('getTheaters', () => {
    const data = imaxTheaterData[0]
    const exps = [
      imaxTheaterData[0].prefecture[0].theater[0],
      imaxTheaterData[0].prefecture[1].theater[0],
      imaxTheaterData[0].prefecture[2].theater[0]
    ]
    var res = getTheaters(data)
    expect(res).toHaveLength(exps.length)
    res.forEach(function (r, rIdx) {
      expect(r).toEqual(exps[rIdx])
    })
  })
})
