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

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
  })

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


app.get('/index.html', (req,res) =>{
  try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
  }
})