const moment = require('moment')

exports.assignWeek = (anime_list) => {
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

    anime_list.map((anime) => {
        let day = moment(anime.startDate).day()
        day != 0 ? day -= 1 : day = 6

        let dayWeek = weekMap[day]

        animeWeek[dayWeek].push(anime)
    })

    return animeWeek
}

module.exports