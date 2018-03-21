"use strict"

const config = require('./config');
const Mongoose = require('mongoose').connect(config.dbURI)

Mongoose.connection.on('error', error=>{
    console.log("MongoDBError"+error);
})

module.exports = {
    Mongoose
}