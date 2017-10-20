const mongoose = require('mongoose')

const TriviaSchema = mongoose.Schema({
  question: String,
  cAnswer: String,
  fake1: String,
  fake2: String,
  score:Array
})

mongoose.model("Trivia", TriviaSchema)
