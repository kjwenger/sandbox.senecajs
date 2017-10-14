htmler = (options) ->
  this.add "role:convert-html,cmd:from", (msg, respond) ->
    respond object: {}
  this.add "role:convert-html,cmd:to", (msg, respond) ->
    respond html: "<html><body></body></html>"
module.exports = htmler