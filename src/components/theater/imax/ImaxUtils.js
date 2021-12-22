export const getTheaters = function (imaxTheaterData) {
  var theaterList = []
  imaxTheaterData.prefecture.forEach(function (prefecture) {
    prefecture.theater.forEach(function (theater) {
      theaterList.push(theater)
    })
  })
  return theaterList
}
