const express = require('express')
const path = require('path')

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '516f766bc18246a2b9f2d5deb66fa01e',
  captureUncaught: true,
  captureUnhandledRejections: true,
})


const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../index.html'))
  rollbar.info('html up and running')
})

app.post('/deploy', (req,res) => {
  
  rollbar.log('email submitted successfully', {author: 'Dallin', type: 'manual'})

  res.status(200).send(students)
  rollbar.critical("Crash while processing email")
})

app.get("/deployment/joke", (req, res) => {
  const joke = ['Q: What did one Ocean say to another? A: Nothing... they just waved.'
]
  res.status(200).send(joke)
})


app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
  })

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.use(rollbar.errorHandler())
// Rollbar.critical("Crash while entering email")
// Rollbar.warning("not valid email");