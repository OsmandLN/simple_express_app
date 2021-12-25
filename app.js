// require package used in the project

const express = require('express')
const app = express()
const port = 3000

// require express-handlebars for the project

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes setting
app.get('/', (req, res) => {
  res.render('show')
})
// app.get('/:page', (req, res) => {
//   res.send(`you are now at page of ${req.params.page}`)
// })

// start and listen on the express server

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})