const express = require('express')
const app = module.exports = express()
const nunjucks = require('nunjucks')

const pino = require('pino')()
const pinoHttp = require('pino-http')( {logger: pino} )
app.use(pinoHttp)

nunjucks.configure([
    'views'
], {
    autoescape: true,
    express: app,
    trimBlocks: true,
    lstripBlocks: true
})

app.use('/assets',express.static('assets'))

const port = process.env.PORT || 3000
app.listen(port, () => pino.info(`Listening on ${port}`))

require('./routes')
