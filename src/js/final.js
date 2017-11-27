const fs = require('fs')
const finalHTML = fs.readFileSync('src/public/html/final.html')

module.exports = function () {
  this.render = (data, name) => {
    return finalHTML.toString()
    .replace(/{{date}}/, data.day)
    .replace(/{{startTime}}/, data.startTime.start)
    .replace(/{{name}}/, name)
  }
}
