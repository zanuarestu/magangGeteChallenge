const express = require('express')
const app = express()
const port = 3001

//import file routes
const routerUser = require ('./routes/user')

//load routes
app.use('/', routerUser)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })