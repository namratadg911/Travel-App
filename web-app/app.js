const express = require("express");
const app = express();
const users = require("./data/users");
const bcryptjs = require("bcryptjs");
//var cookieParser = require('cookie-parser');
const authCookieSaltRounds = 4;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

const staticPath = express.static(__dirname + "/public");
app.use("/public", staticPath);
const expressHandleBars = require("express-handlebars");
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  expressHandleBars({
    defaultLayout: "main"
  })
);

const session = require("express-session");
app.use(
  session({
    name: "AuthCookie",
    secret: "some secret string!",
    resave: false,
    saveUninitialized: true
  })
);

//Logging Middleware
app.use(function(req, res, next) {
  let authMsg = "(Non-Authenticated User)";
  if (req.session !== undefined && req.session.username != undefined) {
    authMsg = "(Authenticated User)";
  }
  console.log(
    "[" +
      new Date() +
      "]: " +
      req.method +
      " " +
      req.originalUrl +
      " " +
      authMsg
  );
  next();
});

const configRoutes = require("./routes");
configRoutes(app);

app.listen(3000, () => {
  console.log("Server got started!!");
  console.log("Routes will be running on http://localhost:3000");
});
