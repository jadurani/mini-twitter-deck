require('dotenv').config()
const config = require('./config')
const Twitter = require('twitter')
const express = require('express')

const client = new Twitter(config)
const PORT = process.env.PORT || process.env.DEV_PORT;
const app = express()

// Create link to Angular build directory
const distDir = __dirname + "/dist/mini-twitter-deck";
// Use the /dist directory
app.use(express.static(distDir));

// Catch all other invalid routes
app.all('/', function(req, res) {
  res.status(200).sendFile(`${distDir}/index.html`);
});

app.get('/statuses/user_timeline', function(req, res){
  client.get('statuses/user_timeline', req.query, (error, tweets) => {
    if (error) {
      console.log(error)
      return res.sendStatus(500)
    }
    res.json(tweets)
  })
})

console.log(`Will listen to port ${PORT}`)
app.listen(PORT, () => {
  console.log(`Now listening to port ${PORT}`)
})