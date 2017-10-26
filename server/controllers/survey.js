const mongoose = require("mongoose")
const User = mongoose.model("User")
const Survey = mongoose.model("Survey")
module.exports = {
  create:(req, res) => {
    let new_survey = new Survey({
    question: req.body.question,
    user: req.session.user.name})
    new_survey.option_1.push(req.body.option_1)
    new_survey.option_2.push(req.body.option_2)
    new_survey.option_3.push(req.body.option_3)
    new_survey.option_4.push(req.body.option_4)
    new_survey.save()
    .then(() => {
      res.json(true)
      console.log("got to create routing")
    })
    .catch(err => console.log(err, "error in routing"))
  },
  show_polls:(req, res) => {
    Survey.find({})
    .then(surveys => {
      res.json(surveys)
    })
    .catch(err => console.log(err, "error in routing"))
  },
  vote:(req, res) => {
    console.log(req.params.id);
    Survey.findOne({_id: req.params.id}).exec()
      .then(survey => res.json(survey))
      .catch(err => console.log('oops, find error'))
  },
  upvote:(req, res) => {
    console.log(req.params.option, req.params._id);
    // let survey = Survey.findOne({_id: req.params.id})
    //   if (!survey.req.params.option[1]){
    //     Survey.findOne({_id: req.params.id}).update({survey.req.params.option[1] = 1});
    //   }else{
    //     Survey.findOne({_id: req.params.id}).update({survey.req.params.option[1] = survey.req.params.option[1] + 1});
    //   })
  }

    //   .then(option => {
    //     console.log('success')
    //     res.json(true)
    //   })
    //   .catch(err => console.log('err', err))
    // }
}
