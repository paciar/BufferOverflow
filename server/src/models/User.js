// User Document Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * User
 * - email: The email address of the user.
 * - username: The username of the user.
 * - passwordHash: The hashed password of the user.
 * - dateJoined: The date and time the user joined the platform.
 * - admin: A boolean flag indicating if the user is an admin.
 * - reputation: The reputation score of the user.
 */

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
    dateJoined: // Previously 'registration_date_time'
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