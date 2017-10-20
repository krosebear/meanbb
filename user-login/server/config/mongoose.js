var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
// connect to mongoose!

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/triviabb1017kendra', {useMongoClient: true})
// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.toLowerCase().includes('.js')) {
    // require the file (this runs the model file which registers the schema)
    require(path.join(models_path, file));
  }
});
