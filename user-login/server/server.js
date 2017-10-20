var express = require('express')
var session = require('express-session')
var app = express()
var path = require("path")
var bodyParser = require('body-parser');
var PORT = 8000

app.use(session({
  secret: 'codingdojorocks',
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
require("./config/mongoose.js")
app.use(express.static(path.join(__dirname, "./../client/dist/")))
require("./config/routes.js")(app)


app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`)
})
