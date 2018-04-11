const express = require('express');
const router = express.Router();

let Room = require('../models/room');

router.get('/', (req, res, next) => {
    Room.getRooms((err, rooms) => {
        if(err) throw err;
        res.json(rooms);
    });
});

router.get('/:id', (req, res, next) => {
    Room.getRoomById(req.params.id, (err, room) => {
        if(err) throw err;
        res.json(room);
    });
});

router.get('/building/:name', (req, res, next) => {
    Room.getRoomsByBuilding(req.params.name, (err, rooms) => {
        if(err) throw err;
        res.json(rooms);
    });
});

router.post('/', (req, res, next) => {
    Room.addRoom(req.body, (err, room) => {
        if(err) throw err;
        res.json(room);
    });
})

router.put('/:id', (req, res, next) => {
    Room.updateRoom(req.params.id, req.body, (err, room) => {
        if(err) throw err;
        Room.getRoomById(req.params.id, (err, room) => {
            if(err) throw err;
            res.json(room);
        });
    });
});

router.delete('/:id', (req, res, next) => {
    Room.removeRoom(req.params.id, (err, room) => {
        if(err) throw err;
        res.json({"message": "delete successfuly"});
    });
});

module.exports = router;