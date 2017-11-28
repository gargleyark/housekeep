const fs = require('fs')
const Day = require('./day.js')
const day = new Day()
const daypickerHTML = fs.readFileSync('src/public/html/daypicker.html')

module.exports = function () {
  this.render = data => {
    return daypickerHTML.toString()
      .replace('{{days}}', getDays(data))
  }
}

function getDays (data) {
  const parsedQueryData = JSON.parse(data.queryData)
  return parsedQueryData.map(function (date) {
    return day.render({
      date,
      hours: data.formData.hours
    })
  }).join('')
}
