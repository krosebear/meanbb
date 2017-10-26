const mongoose = require('mongoose')

const SurveySchema = mongoose.Schema({
  question: String,
  user: String,
  option_1: [],
  option_2: [],
  option_3: [],
  option_4: []
}, {timestamps: true})

mongoose.model("Survey", SurveySchema)
