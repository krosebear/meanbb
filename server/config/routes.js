const path = require("path")
const users = require("./../controllers/users.js")
const survey = require("./../controllers/survey.js")


module.exports = app => {
  app.get("/show_users", users.show_users)
  app.post("/login", users.login)
  app.get("/loggedIn", users.loggedIn)
  app.get("/logout", users.logout)
  app.get("/destroy/:id", users.destroy)
  app.get("/vote/:id", survey.vote)
  app.get("/upvote", survey.upvote)
  app.post("/create", survey.create)
  app.get("/show_polls", survey.show_polls)
  // app.get("/poll/:id", survey.poll)

  //has to be last
  app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}
