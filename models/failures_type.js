const mongoose = require('mongoose');

const failuresTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

let FailureType = module.exports = mongoose.model('FailureType', failuresTypeSchema);

//get Failure Types
module.exports.getFailuresTypes = (callback, limit) => {
    FailureType.find(callback).limit(limit);
};

//get Failure Type by id
module.exports.getFailuresTypeById = (id, callback) => {
    FailureType.findById(id, callback);
};

//add new Failure Type
module.exports.addFailuresType = (failureType, callback) => {
    FailureType.create(failureType, callback);
}

//update Failure Type
module.exports.updateFailuresType = (id, failureType, callback) => {
    let query = {
        name: failureType.name
    };
    FailureType.findByIdAndUpdate(id, query, callback);
}

//remove Failure Type
module.exports.removeFailuresType = (id, callback) => {
    FailureType.findByIdAndRemove(id, callback);
};