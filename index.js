const express = require('express')
const path    = require('path')
const Kitsu   = require('kitsu')
const utils = require('./lib/utils.js')

const app = express()
const api = new Kitsu()

const PORT = 8080
const HOST = '0.0.0.0'

app.get('/anime', (req,res) => {
  let params = {
    'filter': {
        'status': 'current',
        'subtype': 'TV',
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

app.get('/upcoming', (req,res) => {
  res.send('Upcoming anime')
})

app.post('/export', (req,res) => {
  let response = api.get('anime')
  res.send(response)
})


app.listen(PORT, HOST)