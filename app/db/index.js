"use strict"

const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI)



module.exports = {
    Mongoose
}