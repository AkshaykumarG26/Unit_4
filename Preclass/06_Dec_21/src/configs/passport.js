const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require("../models/user.model")

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:1234/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
    // const user = await User.findOne()
        return done(err, user);
}
));