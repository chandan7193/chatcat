"use strict";

const config = require("../config");

console.log(config.dbURI);

Mongoose.connection.on("error", error => {
  console.log(error);
});

module.exports = {
  Mongoose
};
