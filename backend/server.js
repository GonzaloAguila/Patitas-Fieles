const express = require("express");
const path = require("path");
const morgan = require("morgan");
const api = require("./api/routes");
const app = express();
const db = require("./db");
const {User, Donation} = require("./models/users")
const bcrypt = require('bcrypt')
// Passport
const cookieParser = require("cookie-parser");
const passport = require("passport");
const sessions = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

//MongoAtlas connection
const connectDB = require("./db")
connectDB()
//

app.use(
  sessions({
    secret: "patitas",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json({ extended: false}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("patitas"));



passport.use(
  new LocalStrategy(
    {
      usernameField: "name",
      passwordField: "password",
    },
    function (name, password, done) {
      User.findOne({name: name})
        .then((user) => {
          if (!user) {
            // user not found
            return done(null, false);
          }
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if(err) throw err

            if(isMatch){
              return done(null,user)
            }else{
              return done(null,false, {message: 'Password incorrecto'})
            }
          })
        })
    .catch(done); // done(err)
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});
passport.deserializeUser(function (id, done) {
  User.findById({_id : id})
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
