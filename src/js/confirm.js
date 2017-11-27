const fs = require('fs')
const confirmHTML = fs.readFileSync('src/public/html/confirm.html')

module.exports = function () {
  this.render = data => {
    return confirmHTML.toString()
    .replace(/{{date}}/, data.day)
    .replace(/{{hours}}/, data.hours)
    .replace(/{{data}}/, buildURL(data))
  }
}

function buildURL (data) {
  return `day=${data.day}&startTime=${data.startTime}&endTime=${data.endTime}&hours=${data.hours}`
}
