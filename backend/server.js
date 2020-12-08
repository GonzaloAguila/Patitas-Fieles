const express = require("express");
const path = require("path");
const morgan = require("morgan");
const api = require("./api/routes");
const app = express();
const db = require("./db");

// Passport
const cookieParser = require("cookie-parser");
const passport = require("passport");
const sessions = require("express-session");
const localStrategy = require("passport-local").Strategy;

//MongoAtlas connection
const connectDB = require("./db")
connectDB()
//

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json({ extended: false}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  sessions({
    secret: "patitas",
    resave: true,
    saveUninitialized: true,
  })
);

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            // email not found
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // wrong password
            }

            return done(null, user); // success :D
          });
        })
        .catch(done); // done(err)
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("tiny"));
app.use("/api", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});


app.listen(3004, () => console.log("Escuchando en puerto 3004"));
