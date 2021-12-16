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

app.post('/api/deploy', (req,res) => {
  let{name}=req.body
  name = name.trim()

  students.push(name)

  rollbar.log('email submitted successfully', {author: 'Dallin', type: 'manual'})

  res.status(200).send(students)
  rollbar.critical("Crash while processing email")
})


app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
  })

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


// Rollbar.critical("Crash while entering email")
// Rollbar.warning("not valid email");