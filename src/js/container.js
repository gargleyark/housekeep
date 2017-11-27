const fs = require('fs')
const appTemplate = fs.readFileSync('src/public/html/index.html')
const header = fs.readFileSync('src/public/html/header.html')
const timeslots = require('./timeslots.js')
const Form =  require('./form.js')
const form = new Form()

console.log(form)

module.exports = function () {
  this.render = data => {
    return appTemplate.toString()
      .replace(/{{header}}/, header)
      .replace(/{{app}}/, getApp(data))
  }
}

function getApp (data) {
  if (data) {
    
  } else {
    return form.render()
  }
}
