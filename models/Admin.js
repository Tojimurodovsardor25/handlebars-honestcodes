const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // avatar: {
    //     type: String
    // }
})

module.exports = model('admin', adminSchema)