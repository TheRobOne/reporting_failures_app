const mongoose = require('mongoose');

const fauilureSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true
    },
    building: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authorEmail: {
        type: String,
        required: true
    },
    state: {
        type: String,
        default: 'nowy'
    },
    date: {
        type: Date,
        default: Date.now
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
        state: failure.state
    };
    Failure.findByIdAndUpdate(id, query, callback);
}

//remove Failure
module.exports.removeFailure = (id, callback) => {
    Failure.findByIdAndRemove(id, callback);
};