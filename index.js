var express = require('express')
var app = express()


app.get('/', (req, res) => {
  res.send('I got a GET Request')
  console.log('got request')
})

app.get('/home', (req, res) => {
  res.send('/home route')
  console.log('from home route')
})

app.listen(3000, () => {
  console.log('Server is up and running on port 3000')
})
