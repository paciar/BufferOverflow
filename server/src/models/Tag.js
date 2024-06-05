// Tag Document Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TagSchema = new Schema({
    name:
    {
        type: String,
        required: true,
        maxLength: 20
    },

    // Previously included references to questions, but will be easier to query them separately.
    // i.e. Question.findAll({tags: tag._id}).sort({datePosted: -1})

    owner: // Previously 'created_by'
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Tag', TagSchema);