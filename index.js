const express = require('express')
const Kitsu = require('kitsu')
const utils = require('./utils/main.js')
const cors = require('cors')

const app = express()
const api = new Kitsu()

const PORT = 8080
const HOST = '0.0.0.0'

app.use(cors())

app.get('/anime', (req, res) => {
  let params = {
    'filter': {
      'status': ['current'],
      'subtype': 'TV'
    },
    'sort': 'popularityRank',
    'page': {
      'limit': 20
    }
  }
  api.get('anime', params).then(
    (response) => {
      res.send(utils.assignWeek(response.data))
    },
    (error) => res.send(error)
  )
})

app.get('/upcoming', (req, res) => {
  let params = {
    'filter': {
      'status': 'upcoming'
    },
    'sort': 'popularityRank',
    'page': {
      'limit': 20
    }
  }

  api.get('anime', params).then(
    (response) => {
      res.send(response.data)
    },
    (error) => res.send(error)
  )
})

app.get('/upcoming/:season', (req, res) => {
  let params = {
    'filter': {
      'status': 'upcoming',
      'season': req.params.season
    },
    'sort': 'popularityRank',
    'page': {
      'limit': 20
    }
  }

  api.get('anime', params).then(
    (response) => {
      res.send(response.data)
    },
    (error) => res.send(error)
  )
})

app.post('/export', (req, res) => {
  let response = api.get('anime')
  res.send(response)
})

app.listen(PORT, HOST)
