const fs = require('fs')
const errorHTML = fs.readFileSync('src/public/html/error.html')

module.exports = function () {
  this.render = times => {
    return errorHTML.toString()
  }
}
