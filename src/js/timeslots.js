const fs = require('fs')
const timeslot = fs.readFileSync('src/public/html/timeslot.html')

module.exports = function (times) {
  this.render = times => {
    return times.map(time => {
      return timeslot.toString()
        .replace('{{time}}', time)
    })
  }
}
