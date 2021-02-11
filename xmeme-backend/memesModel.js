// memesModel.js
var mongoose = require('mongoose');
// Setup schema
var memesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    caption: {type: String, required: true},
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export meme model
var Memes = module.exports = mongoose.model('memes', memesSchema);
module.exports.get = function (callback, limit) {
    Memes.find(callback).limit(limit);
}