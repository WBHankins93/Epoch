const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors           = require('cors')
const session        = require('express-session')

const productController = require('./controllers/productController')

require('./db/db')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/shop', productController)


app.listen(process.env.PORT || 9000, () => {
  console.log('Listening on Port 9000')
})
