const app = require('..')

app.use(require('./health.js'))
app.use(require('./home.js'))

app.get('/', async (req, res) => res.render('template.html'))
