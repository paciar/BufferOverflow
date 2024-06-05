// User Document Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email:
    {
        type: String,
        required: true
    },
    username:
    {
        type: String,
        required: true,
        maxLength: 25 // Previously unlimited
    },
    passwordHash:
    {
        type: String,
        required: true
    },
    dateJoined:
    {
        type: Date,
        default: Date.now
    },
    admin:
    {
        type: Boolean,
        default: false
    },
    reputation:
    {
        type: Number,
        default: 50
    },

    // Previously included references to questions, answers, comments, and tags, but will be easier to query them separately.
    // i.e. Question.findAll({owner: user._id}), etc.
});

module.exports = mongoose.model('User', UserSchema);