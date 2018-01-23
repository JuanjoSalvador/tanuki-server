const moment = require('moment')

exports.assignWeek = (animeList) => {
  const weekMap = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  let animeWeek = {
    'monday': [],
    'tuesday': [],
    'wednesday': [],
    'thursday': [],
    'friday': [],
    'saturday': [],
    'sunday': []
  }

  let weekEnds = moment().endOf('week').add(1, 'd')

  animeList.map((anime) => {
    let day = moment(anime.startDate).day()
    day !== 0 ? day -= 1 : day = 6

    let dayWeek = weekMap[day]

    if ((anime.status === 'upcoming' && new Date(anime.startDate) < weekEnds) || (anime.status === 'current')) {
      animeWeek[dayWeek].push(anime)
    }
  })

  return animeWeek
}