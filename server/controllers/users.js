// const users = [{name: "Kendra", createdAt: new Date()}, {name:"Kelsi", createdAt: new Date()}]
const mongoose = require("mongoose")
const User = mongoose.model("User")
module.exports = {
  show_users:(req, res) => {
    User.find({})
      .then(users => res.json(users))
      .catch(err => {
        console.log( err, "user.find error")
        res.status(500).json(err)
      })
  },
  login:(req, res) => {
    User.findOne({name: req.body.name})
			.then(user => {
				if(user){
					req.session.user = user
					res.json(true)
				} else {
					let new_user = new User(req.body)
					new_user.save()
						.then(() => {
							req.session.user = new_user
							res.json(true)
						})
						.catch(err => {
							console.log("User save error", err)
							res.status(500).json(err)
						})
				}
			})
	},
  loggedIn:(req, res) => {
    if(req.session.user){
      res.json(req.session.user)
      // console.log("logged in")
    }else{
      res.status(401).json(false)
      console.log("not logged in")
    }
  },
  logout:(req, res) => {
    req.session.destroy()
    res.redirect("/")
  },
  destroy:(req, res) => {
    // console.log("i got to users.js")
    console.log(req.params.id);
    User.remove({_id: req.params.id}).exec()
      .then(res.json(true))
      .catch(err => console.log("error", err))
  }
}
