htmler = (options) ->
  this.add "role:convert,cmd:from", (msg, respond) ->
    respond object: {}
  this.add "role:convert,cmd:to", (msg, respond) ->
    respond html: "<html><body></body></html>"
module.exports = htmler