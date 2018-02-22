const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)
  
app.listen(8080,()=>{
});

console.log('Running')