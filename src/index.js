const express = require('express')
const request = require('request');
const app = express()
const utils = require('./js/utils.js')
const AppContainer = require('./js/container.js')
const container = new AppContainer()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  console.log(req.query)
  res.send(container.render())
})

app.get('/getTimes*', (req, res) => {
  const formData = utils.parseFormData(req.query)
  if (formData) {
    request(`https://private-anon-b166dd0716-housekeepavailability.apiary-mock.com/availability/?weekBeginning=${formData.date}&visitDuration=${formData.hours}&postcode=${formData.postCode}`, (error, r, queryData) => {
    // request(`https://private-anon-b166dd0716-housekeepavailability.apiary-mock.com/availability/?weekBeginning=2016-12-05&visitDuration=2.5&postcode=EC1R%203BU`, (error, r, queryData) => {
      if (!error && queryData) {
        res.send(container.render({queryData, formData}))
      }
    })
  } else {
    res.send(container.render({
      error: 'there are no available cleaners for the date and area you want'
    }))
  }
})

app.get('/confirm*', (req, res) => {
  const confirmationData = utils.parseConfirmationData(req.query)
  if (confirmationData) {
      res.send(container.render({confirmationData}))
  } else {
    res.send(container.render({
      error: 'the booking request data you supplied was incomplete'
    }))
  }
})

app.get('/book*', (req, res) => {
  const bookingData = utils.parseBookingData(req.query)
  if (bookingData) {
    request.post({url:'https://private-anon-b166dd0716-housekeepavailability.apiary-mock.com/book/', form: bookingData}, (err, httpResponse, body) => {
      body = JSON.parse(body)
      if (body && body.success) {
        console.log('yes')
        res.send(container.render({bookingData, cleaner: body.cleaner}))
      } else {
        res.send(container.render({
          error: 'the booking request was not successful'
        }))
      }
    })
  } else {
    res.send(container.render({
      error: 'the booking information you supplied was incomplete'
    }))
  }
})

app.listen(9001)
