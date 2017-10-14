module.exports = function yamler () {
  this.add('role:convert-yaml,cmd:from', (msg, respond) => {
    respond(`${msg}`)
  })
  this.add('role:convert-yaml,cmd:to', (msg, respond) => {
    respond(`${msg}`)
  })
}
