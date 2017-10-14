module.exports = function jsoner () {
  this.add('role:convert-json,cmd:from', (msg, respond) => {
    respond({object: {}})
  })
  this.add('role:convert-json,cmd:to', (msg, respond) => {
    respond({json: {}})
  })
}
