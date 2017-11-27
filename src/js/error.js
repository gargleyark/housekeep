const fs = require('fs')
const errorHTML = fs.readFileSync('src/public/html/error.html')

module.exports = function () {
  this.render = (error) => {
    return errorHTML.toString()
      .replace('{{errorMessage}}', error)
  }
}
