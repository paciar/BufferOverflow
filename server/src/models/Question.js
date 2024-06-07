// Question Document Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Question
 * - title: The title of the question.
 * - summary: A brief summary of the question.
 * - text: The full text of the question.
 * - tags: The tags associated with the question.
 * - owner: The user who posted the question.
 * - createdAt: The date and time the question was posted.
 * - numViews: The number of views the question has received.
 * - numVotes: The number of votes the question has received.
 */

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
        required: true
    },

    // Previously included references to answers and comments, but will be easier to query them separately.
    // i.e. Answer.findAll({associatedQuestion: question._id}).sort({createdAt: -1})
    // i.e. Comment.findAll({associatedQuestion: question._id}).sort({createdAt: -1})

    owner: // Previously 'asked_by'
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: // Previously 'ask_date_time'
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

module.exports = mongoose.model('Question', QuestionSchema);