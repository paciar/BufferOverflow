// Comment Document Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    text:
    {
        type: String,
        required: true,
        maxLength: 200 // Previously 140
    },
    owner: // Previously 'commented_by'
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted: // Previously 'comment_date_time'
    {
        type: Date,
        default: Date.now
    },
    numVotes: // Previously 'votes'
    {
        type: Number,
        default: 0
    },

    // Comments can be made on Questions or Answers, so set the necessary reference
    associatedQuestion: // Previously 'question'
    {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        default: null
    },
    associatedAnswer: // Previously 'answer'
    {
        type: Schema.Types.ObjectId,
        ref: 'Answer',
        default: null
    }

    // For future implementation: include a list of users who have voted on the comment to prevent multiple votes.
});

module.exports = mongoose.model('Comment', CommentSchema);