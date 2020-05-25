const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let userSchema = new Schema(

    {
        userId: {
            type: String,
            default: '',
            index: true,
            unique: true
        },
        firstName: {
            type: String,
            default: ''
        },
        lastname: {
            type: String,
            default: ''
        },
        password: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        },
        mobileNumber: {
            type: Number,
            default: 0
        },
        createdOn: {
            type: Date,
            default: ""
        }
    }
)

mongoose.model('User', userSchema);
