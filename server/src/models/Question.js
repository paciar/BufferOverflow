// Question Document Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    title:
    {
        type: String,
        required: true,
        maxLength: 100 // Previously 50
    },
    summary:
    {
        type: String,
        required: true,
        maxLength: 200 // Previously 140
    },
    text:
    {
        type: String,
        required: true,
        maxLength: 10000 // Previously unlimited
    },
    tags:
    {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Tag'
        }],
        required: true,
        validate: [validateTags, 'A question must have between 1 and 5 tags.']
    },

    // Previously included references to answers and comments, but will be easier to query them separately.
    // i.e. Answer.findAll({associatedQuestion: question._id}).sort({datePosted: -1})
    // i.e. Comment.findAll({associatedQuestion: question._id}).sort({datePosted: -1})

    owner: // Previously 'asked_by'
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted: // Previously 'ask_date_time'
    {
        type: Date,
        default: Date.now
    },
    numViews: // Previously 'views'
    {
        type: Number,
        default: 0
    },
    numVotes: // Previously 'votes'
    {
        type: Number,
        default: 0
    }

    // For future implementation: include a list of users who have voted on the question to prevent multiple votes.
});

function validateTags(tags) {
    return tags.length > 0 && tags.length <= 5;
}

module.exports = mongoose.model('Question', QuestionSchema);