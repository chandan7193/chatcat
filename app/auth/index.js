"use strict";

const passport = require("passport");
const config = require("../config");
const h = require("../helpers");
const FacebookStrategy = require("passport-facebook").Strategy;

module.exports = () => {

  passport.serializeUser((user, done)=>{
    done(null, user.id);
  });

  passport.deserializeUser((id, done)=>{
    h.findById(id)
    .then(user => done(null, user))
    .catch(error => console.log('error when deserializing the user'));
  });

  let authProcessor = (accessToken, refreshToken, profile, done) => {
    h.findOne(profile.id).then(result => {
      if (result) {
        done(null, result);
      } else {
        // Create the user
      }
    });
  };
  passport.use(new FacebookStrategy(config.fb, authProcessor));
};
