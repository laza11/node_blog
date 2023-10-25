const express = require('express') //import lib
const app = express() //call express
const port = 3000 //run on port 3000

//define route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})