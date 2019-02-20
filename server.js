const express = require('express')
const server = express()

server.use(express.static('dist'))
const port = process.env.PORT || 4000

server.listen(() => {
  console.log(`Server successfully started on port ${ port }.`);
})
