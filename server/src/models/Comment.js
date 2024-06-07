// Comment Document Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Comment
 * - text: The text of the comment.
 * - owner: The user who posted the comment.
 * - createdAt: The date and time the comment was posted.
 * - numVotes: The number of votes the comment has received.
 * - associatedQuestion: The question the comment is associated with, if any.
 * - associatedAnswer: The answer the comment is associated with, if any.
 */

var CommentSchema = new Schema({
    text:
    {
        type: String,
        required: true,
        maxLength: 250 // Previously 140
    },
    owner: // Previously 'commented_by'
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: // Previously 'comment_date_time'
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