var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

/**

  API para login social no facebook utilizando módulo PassportJS

  Create by Renan Lalier
  Since: 12/12/2016
  version: 1.0

**/

passport.use(new FacebookStrategy({
        clientID: 1548559758504414,
        clientSecret: '35bef75b6a94a6d858ebf23d58c119fa',
        callbackURL: "http://localhost:3000/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'photos', 'email', 'first_name', 'last_name', 'gender', 'birthday'],
        enableProof: true
    },

    function(accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});
