const fs = require('fs')
const timeslot = fs.readFileSync('src/public/html/timeslot.html')

module.exports = function () {
  this.render = data => {
    return data.date.startTimes.map(time => {
      return timeslot.toString()
        .replace('{{start}}', time.start)
        .replace('{{end}}', time.end)
        .replace('{{possible}}', time.possible)
        .replace('{{href}}', time.possible && `href="/confirm?day=${data.date.day}&startTime=${time.start}&endTime=${time.end}&hours=${data.hours}"` || '')
    }).join('')
  }
}
