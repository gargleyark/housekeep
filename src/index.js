const express = require('express')
const app = express()
const AppContainer = require('./js/container.js')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  console.log(req.query)
  const container = new AppContainer()
  res.send(container.render())
})

app.get('/book*', (req, res) => {
  const data = utils.parseData(req.query)
  const container = new AppContainer()
  res.send(container.render({
    
  }))
})

app.listen(9001)
