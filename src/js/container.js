const fs = require('fs')
const appTemplate = fs.readFileSync('src/public/html/index.html')
const header = fs.readFileSync('src/public/html/header.html')
const Form =  require('./form.js')
const form = new Form()
const Day =  require('./day.js')
const day = new Day()
const Error =  require('./error.js')
const error = new Error()
const Confirm =  require('./confirm.js')
const confirm = new Confirm()
const Final =  require('./final.js')
const final = new Final()

module.exports = function () {
  this.render = data => {
    return appTemplate.toString()
      .replace(/{{header}}/, header)
      .replace(/{{app}}/, getApp(data))
  }
}

function getApp (data) {
  if (data) {
    if (data.error) {
      return error.render(data.error) +
        form.render()
    } else if (data.queryData) {
      const queryData = JSON.parse(data.queryData)
      return queryData.map(function (date) {
        return day.render({
          date,
          hours: data.formData.hours
        })
      }).join('')
    } else if (data.confirmationData) {
      return confirm.render(data.confirmationData)
    } else if (data.bookingData) {
      return final.render(data.bookingData, data.cleaner.name)
    }
  } else {
    return form.render()
  }
}
