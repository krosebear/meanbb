const path = require("path")
const users = require("./../controllers/users.js")
const trivia = require("./../controllers/trivia.js")


module.exports = app => {

  app.get("/show_users", users.show_users)
  app.post("/login", users.login)
  app.get("/loggedIn", users.loggedIn)
  app.get("/logout", users.logout)
  app.get("/addquestion", users.addquestion)
  app.get("/home", users.home)
  app.get("/play", users.play)
  app.post("/insertQuestion", trivia.insertQuestion)


  // app.get("/destroy/:id", users.destroy)

  //has to be last
  app.get("*", (req, res) => res.sendFile(path.resolve("./../client/dist/index.html")))
}
