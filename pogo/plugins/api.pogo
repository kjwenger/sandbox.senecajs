api (options) =

  valid_ops = {to "to", from "from"}
  valid_content_types = {
    "text/html" = "html"
    "text/xml" = "xml"
    "application/json" = "json"
    "application/xml" = "xml"
  }

  role api path convert (msg, respond) =
    operation = msg.args.params.operation
    console.log("operation:", operation)
    request = msg.("request$") || {}
    headers = request.headers || {}
    console.log("headers:", headers)
    content_type = headers.("content-type") || "text/html"
    console.log("content_type:", content_type)
    type = valid_content_types.(content_type)
    console.log("type:", type)
    this.act("role:convert-#(type)", {cmd = valid_ops.(operation)}, respond)

  this.add("role:api,path:convert", role api path convert)

  init api (msg, respond) =
    this.act ("role:web", {routes {
      prefix "/api"
      pin "role:api,path:*"
      map {
        convert {GET = true, suffix "/:operation"}
      }
    }}, respond)

  this.add("init:api", init api)

module.exports = api