// Answer Document Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    text:
    {
        type: String,
        required: true
    },
    owner: // Previously 'ans_by'
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted: // Previously 'ans_date_time'
    {
        type: Date,
        default: Date.now
    },

    // Previously included references to comments, but will be easier to query them separately.
    // i.e. Comment.findAll({associatedAnswer: answer._id}).sort({datePosted: -1})

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