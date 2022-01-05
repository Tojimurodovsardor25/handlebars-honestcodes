const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
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
    contentId: {
        ref: 'contents',
        type: Schema.Types.ObjectId
    }
})

module.exports = model('users', UserSchema)