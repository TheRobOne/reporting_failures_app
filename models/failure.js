const mongoose = require('mongoose');

const fauilureSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    }
});

let Failure = module.exports = mongoose.model('Failure', fauilureSchema);

//get Failure
module.exports.getFailures = (callback, limit) => {
    Failure.find(callback).limit(limit);
};

//get Failure by id
module.exports.getFailureById = (id, callback) => {
    Failure.findById(id, callback);
};

//add new Failure
module.exports.addFailure = (failure, callback) => {
    Failure.create(failure, callback);
}

//update Failure
module.exports.updateFailure = (id, failure, callback) => {
    let query = {
        name: failure.name
    };
    Failure.findByIdAndUpdate(id, query, callback);
}

//remove Failure
module.exports.removeFailure = (id, callback) => {
    Failure.findByIdAndRemove(id, callback);
};