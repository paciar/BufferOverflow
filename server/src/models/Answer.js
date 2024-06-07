// Answer Document Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Answer
 * - text: The text of the answer.
 * - owner: The user who posted the answer.
 * - createdAt: The date and time the answer was posted.
 * - numVotes: The number of votes the answer has received.
 * - associatedQuestion: The question the answer is associated with.
 */

var AnswerSchema = new Schema({
    text:
    {
        type: String,
        required: true,
        maxLength: 10000
    },
    owner: // Previously 'ans_by'
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: // Previously 'ans_date_time'
    {
        type: Date,
        default: Date.now
    },

    // Previously included references to comments, but will be easier to query them separately.
    // i.e. Comment.findAll({associatedAnswer: answer._id}).sort({createdAt: -1})

    numVotes: // Previously 'votes'
    {
        type: Number,
        default: 0
    },
    associatedQuestion: // Previously 'question'
    {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    }

    // For future implementation: 'accepted' field to mark the answer as the accepted answer to the question.
    // Could also include a list of users who have voted on the answer to prevent multiple votes.
});

module.exports = mongoose.model('Answer', AnswerSchema);