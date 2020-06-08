const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../library/timeLib')

const auth = new Schema({
    userId: {
        type: String,
        required: true
    },
    authToken: {
        type: String,
        required: true
    },
    tokenSecret: {
        type: String,
        required: true
    },
    tokenGenerationTime: {
        type: Date,
        default: time.now(),
    },
})

module.exports = mongoose.model("auth", auth)
