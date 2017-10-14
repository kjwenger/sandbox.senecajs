module.exports = function yamler () {
  this.add('role:convert,cmd:from', (msg, respond) => {
    respond(`${msg}`)
  })
  this.add('role:convert,cmd:to', (msg, respond) => {
    respond(`${msg}`)
  })
}
