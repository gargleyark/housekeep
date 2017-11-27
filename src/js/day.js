const fs = require('fs')
const dayHTML = fs.readFileSync('src/public/html/day.html')
const Timeslots =  require('./timeslots.js')
const timeslots = new Timeslots()

module.exports = function () {
  this.render = data => {
    return dayHTML.toString()
      .replace('{{day}}', data.date.day)
      .replace('{{timeslots}}', timeslots.render(data))
  }
}
