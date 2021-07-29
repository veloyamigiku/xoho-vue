import { shallowMount } from '@vue/test-utils'
import { movieData } from '@/components/movie/MovieData'
import MovieSummary from '@/components/movie/MovieSummary'

describe('MovieSummaryコンポーネント', () => {
  it('プロップスのテスト', () => {
    const data = movieData
    const wrapper = shallowMount(
      MovieSummary,
      {
        propsData: {
          data
        }
      }
    )

    const movieSummaryTitleNode = wrapper.findAll('div.MovieSummaryTitle')
    expect(movieSummaryTitleNode).toHaveLength(1)
    expect(movieSummaryTitleNode.at(0).text()).toEqual(data.name)

    const movieSummarySubNode = wrapper.findAll('div.MovieSummarySub')
    expect(movieSummarySubNode).toHaveLength(1)
    expect(movieSummarySubNode.at(0).text()).toEqual(data.sub)
    const movieSummaryThumbNodes = wrapper.findAll('img.MovieSummaryThumb')
    expect(movieSummaryThumbNodes).toHaveLength(data.thumb.length)
    if (data.thumb && data.thumb.length > 0) {
      data.thumb.forEach(function (thumb, thumbIdx) {
        const movieSummaryThumbNode = movieSummaryThumbNodes.at(thumbIdx)
        expect(movieSummaryThumbNode.attributes().src).toEqual(thumb.url)
      })
    }
    const movieSummaryDescNode = wrapper.findAll('div.MovieSummaryDesc')
    expect(movieSummaryDescNode).toHaveLength(1)
    expect(movieSummaryDescNode.at(0).text()).toEqual(data.description)

    const movieSummaryDirectorNode = wrapper.findAll('div.MovieSummaryDirector')
    expect(movieSummaryDirectorNode).toHaveLength(1)
    var director = null
    if (data.director && data.director.length > 0) {
      data.director.forEach(function (d) {
        if (director == null) {
          director = d.name
        } else {
          director += '、' + d.name
        }
      })
    }
    expect(movieSummaryDirectorNode.at(0).text()).toEqual(director)

    const movieSummaryPerformerNode = wrapper.findAll('div.MovieSummaryPerformer')
    expect(movieSummaryPerformerNode).toHaveLength(1)
    var performer = null
    if (data.performer && data.performer.length > 0) {
      data.performer.forEach(function (p) {
        if (performer == null) {
          performer = p.name
        } else {
          performer += '、' + p.name
        }
      })
    }
    expect(movieSummaryPerformerNode.at(0).text()).toEqual(performer)

    const movieSummaryRunningTimeNode = wrapper.findAll('div.MovieSummaryRunningTimeMinute')
    expect(movieSummaryRunningTimeNode).toHaveLength(1)
    const runningTime = '[' + data.name + '  上映時間：' + data.runningTimeMinute + '分 ]'
    expect(movieSummaryRunningTimeNode.at(0).text()).toEqual(runningTime)
    const movieSummaryUrlNode = wrapper.findAll('a.MovieSummaryUrl')
    expect(movieSummaryUrlNode).toHaveLength(1)
    const urlText = data.name + '：公式サイト'
    expect(movieSummaryUrlNode.at(0).text()).toEqual(urlText)
  })
})
