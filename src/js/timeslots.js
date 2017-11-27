const fs = require('fs')
const timeslot = fs.readFileSync('src/public/html/timeslot.html')

module.exports = function () {
  this.render = times => {
    return times.map(time => {
      return timeslot.toString()
        .replace('{{start}}', time.start)
        .replace('{{end}}', time.end)
        .replace('{{possible}}', time.possible)
    }).join('')
  }
}
