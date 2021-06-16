import { getComingSoonDateList, getScheduleDateList } from '@/utils/coming_soon/schedule'

describe('公開予定作品_共通処理_schedule', () => {
  it('getScheduleDateList_01', () => {
    const inputData = [
      {
        year: 2021,
        month: 6,
        day: 3,
        idx: 0
      },
      {
        year: 2021,
        month: 6,
        day: 12,
        idx: 1
      },
      {
        year: 2021,
        month: 7,
        day: 21,
        idx: 2
      },
      {
        year: 2021,
        month: 7,
        day: 28,
        idx: 3
      },
      {
        year: 2021,
        month: 9,
        day: 1,
        idx: 4
      }
    ]
    const outputData = [
      {
        year: 2021,
        month: 6,
        day: 3,
        idx: 0
      },
      {
        year: 2021,
        month: 6,
        day: 12,
        idx: 1
      },
      {
        year: 2021,
        month: 7,
        day: undefined,
        idx: 2
      },
      {
        year: 2021,
        month: 9,
        day: undefined,
        idx: 4
      }
    ]

    const scheduleDateList = getScheduleDateList(inputData)
    scheduleDateList.forEach(function (scheduleDate, scheduleDateIdx) {
      expect(scheduleDate.year).toEqual(outputData[scheduleDateIdx].year)
      expect(scheduleDate.month).toEqual(outputData[scheduleDateIdx].month)
      expect(scheduleDate.day).toEqual(outputData[scheduleDateIdx].day)
      expect(scheduleDate.idx).toEqual(outputData[scheduleDateIdx].idx)
    })
  })
  it('getComingSoonDateList_01', () => {
    const data = [
      {
        year: 2021,
        month: 6,
        day: 3,
        idx: 0
      },
      {
        year: 2021,
        month: 6,
        day: 12,
        idx: 1
      },
      {
        year: 2021,
        month: 7,
        day: 21,
        idx: 2
      },
      {
        year: 2021,
        month: 7,
        day: 28,
        idx: 3
      },
      {
        year: 2021,
        month: 9,
        day: 1,
        idx: 4
      }
    ]

    const comingSoonDateList = getComingSoonDateList(data)
    comingSoonDateList.forEach(function (comingSoonDate, comingSoonDateIdx) {
      expect(comingSoonDate.year).toEqual(data[comingSoonDateIdx].year)
      expect(comingSoonDate.month).toEqual(data[comingSoonDateIdx].month)
      expect(comingSoonDate.day).toEqual(data[comingSoonDateIdx].day)
      expect(comingSoonDate.idx).toEqual(comingSoonDateIdx)
    })
  })
})
