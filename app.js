const express = require('express')
const fs = require('fs')
const https = require('https')
const app = express()
const port = 3000

app.use('/public', express.static('public'))

app.get('/', function (req, res) {
  res.send('hello world')
})

/*
 * Setup self-signed https connection
 */
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(port, function () {
  console.log(`Example app listening on port ${port}! Go to https://localhost:${port}`)
})