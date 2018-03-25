const express = require('express');
const router = express.Router();

let Building = require('../models/building');

router.get('/', (req, res) => {
    Building.getBuildigns((err, buildings) => {
        if(err) throw err;
        res.json(buildings);
    });
});

router.get('/:id', (req, res) => {
    Building.getBuildingById(req.params.id, (err, building) => {
        if(err) throw err;
        res.json(building);
    });
});

router.post('/', (req, res) => {
    Building.addBuilding(req.body, (err, building) => {
        if(err) throw err;
        res.json(building);
    });
})

router.put('/:id', (req, res) => {
    Building.updateBuilding(req.params.id, req.body, (err, building) => {
        if(err) throw err;
        Building.getBuildingById(req.params.id, (err, building) => {
            if(err) throw err;
            res.json(building);
        });
    });
});

router.delete('/:id', (req, res) => {
    Building.removeBuilding(req.params.id, (err, building) => {
        if(err) throw err;
        res.json({"message": "delete successfuly"});
    });
});

module.exports = router;