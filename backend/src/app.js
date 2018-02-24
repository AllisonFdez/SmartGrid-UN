const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./models')
const config = require('./config')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
  
require('./routes')(app)

db.sequelize.sync().then(()=>{
    app.listen(config.port);
});

console.log(`Api running on port: ${config.port}`)