const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    building: {
        type: String,
        required: true
    }
});

let Room = module.exports = mongoose.model('Room', roomSchema);

//get Rooms
module.exports.getRooms = (callback, limit) => {
    Room.find(callback).limit(limit);
};

//get Room by id
module.exports.getRoomById = (id, callback) => {
    Room.findById(id, callback);
};

//add new Room
module.exports.addRoom = (room, callback) => {
    Room.create(room, callback);
}

//update Room
module.exports.updateRoom = (id, room, callback) => {
    let query = {
        name: room.name
    };
    Room.findByIdAndUpdate(id, query, callback);
}

//remove Room
module.exports.removeRoom = (id, callback) => {
    Room.findByIdAndRemove(id, callback);
};