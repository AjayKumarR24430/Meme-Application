var mongoose = require('mongoose');

var arraySchema = mongoose.Schema({
    id:{
        type: String,
        required: true
    }
});

// Export array model
var idArray = module.exports = mongoose.model('idarray', arraySchema);
module.exports.getId = function (callback, limit) {
    idArray.find(callback).limit(limit);
}