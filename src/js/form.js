const fs = require('fs')
const form = fs.readFileSync('src/public/html/form.html')

module.exports = function () {
  this.render = () => {
    return form.toString()
      .replace('{{dd}}', getDD())
      .replace('{{mm}}', getMM())
      .replace('{{yy}}', getYY())
      .replace('{{hours}}', getHours())
  }
}

function getDD () {
  return [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ].map((day) => {
    return `<option>${day}</option>`
  }).join('')
}

function getMM () {
  return [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12
  ].map((month) => {
    return `<option>${month}</option>`
  }).join('')
}

function getYY () {
  return [
    2017, 2018
  ].map((month) => {
    return `<option>${month}</option>`
  }).join('')
}

function getHours () {
  const maxHours = 9
  const minHours = 2
  const hoursText = []
  let hours = minHours
  while (hours <= maxHours) {
    hoursText.push(hours + ' hours')
    hours+=0.5
  }
  return hoursText.map((hour) => {
    return `<option>${hour}</option>`
  }).join('')
}
