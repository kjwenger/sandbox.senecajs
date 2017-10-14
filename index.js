const seneca = require('seneca')
const senecaWeb = require('seneca-web')
const express = require('express')
const router = new express.Router()

const senecaWebConfig = {
  context: router,
  adapter: require('seneca-web-adapter-express'),
  options: {parseBody: false} // so we can use body-parser
}

express()
  .use(require('body-parser').json())
  .use(router)
  .listen(3000)

seneca()
  .use(senecaWeb, senecaWebConfig)
  .use('./lib/plugins/htmler')
  .use('./lib/plugins/jsoner')
// .use('./lib/plugins/tomler')
  .use('./lib/plugins/xmler')
  .use('./lib/plugins/yamler')
  .use('./lib/plugins/api')
  .client({type: 'tcp', pin: 'role:convert-html'})