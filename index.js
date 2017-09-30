const express = require('express')
const app = express()
const aa = require("./action/index.js")




app.get('/', function (req, res) {
  res.send('Hello Welcome')
})

app.use('/action', aa)
  
app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})