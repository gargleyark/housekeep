const express = require('express')
const request = require('request');
const app = express()
const utils = require('./js/utils.js')
const AppContainer = require('./js/container.js')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  console.log(req.query)
  const container = new AppContainer()
  res.send(container.render())
})

app.get('/book*', (req, res) => {
  const data = utils.parseFormData(req.query)
  const container = new AppContainer()
  if (data) {
    // request(`https://private-anon-b166dd0716-housekeepavailability.apiary-mock.com/availability/?weekBeginning=${data.date}&visitDuration=${data.hours}&postcode=${data.postcode}`, (error, res, data) => {
    request(`https://private-anon-b166dd0716-housekeepavailability.apiary-mock.com/availability/?weekBeginning=2016-12-05&visitDuration=2.5&postcode=EC1R%203BU`, (error, r, data) => {
      if (!error && data) {
        res.send(container.render(data))
      }
    })
  } else {
    res.send(container.render({
      error: true
    }))
  }
})

app.listen(9001)
