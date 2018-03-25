const express = require('express');
const router = express.Router();

let Room = require('../models/room');

router.get('/', (req, res) => {
    Room.getRooms((err, rooms) => {
        if(err) throw err;
        res.json(rooms);
    });
});

router.get('/:id', (req, res) => {
    Room.getRoomById(req.params.id, (err, room) => {
        if(err) throw err;
        res.json(room);
    });
});

router.post('/', (req, res) => {
    Room.addRoom(req.body, (err, room) => {
        if(err) throw err;
        res.json(room);
    });
})

router.put('/:id', (req, res) => {
    Room.updateRoom(req.params.id, req.body, (err, room) => {
        if(err) throw err;
        Room.getRoomById(req.params.id, (err, room) => {
            if(err) throw err;
            res.json(room);
        });
    });
});

router.delete('/:id', (req, res) => {
    Room.removeRoom(req.params.id, (err, room) => {
        if(err) throw err;
        res.json({"message": "delete successfuly"});
    });
});

module.exports = router;