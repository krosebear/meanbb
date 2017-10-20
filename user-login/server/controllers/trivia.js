const mongoose = require("mongoose")
const Trivia = mongoose.model("Trivia")
const User = mongoose.model("User")

module.exports = {
  insertQuestion:(req, res) => {
    if(req.session.user){
      console.log("i got to insertQuestion user.js")
      let new_trivia = new Trivia(req.body)
      new_trivia.save()
        .then(() => {
          req.session.user = req.session.user
          res.json(true)
          console.log(req.session.user)
          // res.redirect('/loggedIn');
          console.log("saved")
        })
        .catch(err => {
          console.log("Trivia save error", err)
          res.status(500).json(err)
        })
      // console.log("logged in")
    }else{
      res.status(401).json(false)
      console.log("not logged in")
    }
  }
}
