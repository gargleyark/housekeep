const fs = require('fs')
const appTemplate = fs.readFileSync('src/public/html/index.html')
const header = fs.readFileSync('src/public/html/header.html')
const Form =  require('./form.js')
const form = new Form()
const Day =  require('./day.js')
const day = new Day()
const Error =  require('./error.js')
const error = new Error()

module.exports = function () {
  this.render = data => {
    return appTemplate.toString()
      .replace(/{{header}}/, header)
      .replace(/{{app}}/, getApp(data))
  }
}

function getApp (data) {
  data = JSON.parse(data)
  if (data) {
    if (data.error) {
      return error.render()
        + form.render()
    } else {
      return data.map(function (date) {
        return day.render(date)
      }).join('')
    }
  } else {
    return form.render()
  }
}
