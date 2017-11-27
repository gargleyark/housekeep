const fs = require('fs')
const confirmHTML = fs.readFileSync('src/public/html/confirm.html')

module.exports = function () {
  this.render = data => {
    return confirmHTML.toString()
    .replace(/{{date}}/, data.day)
    .replace(/{{hours}}/, data.hours)
    .replace(/{{inputs}}/, buildHiddenInputs(data))
  }
}

function buildHiddenInputs (data) {
  let html = ''
  for (let item in data) {
    html += `<input type="hidden" name="${item}" value=${data[item]}>`
  }
  return html
}
