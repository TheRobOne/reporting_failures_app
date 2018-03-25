const express = require('express');
const router = express.Router();

let Failure = require('../models/failure');

router.get('/', (req, res) => {
    Failure.getFailures((err, failures) => {
        if(err) throw err;
        res.json(failures);
    });
});

router.get('/:id', (req, res) => {
    Failure.getFailureById(req.params.id, (err, failure) => {
        if(err) throw err;
        res.json(failure);
    });
});

router.post('/', (req, res) => {
    Failure.addFailure(req.body, (err, failure) => {
        if(err) throw err;
        res.json(failure);
    });
})

router.put('/:id', (req, res) => {
    Failure.updateFailure(req.params.id, req.body, (err, failure) => {
        if(err) throw err;
        Failure.getFailureById(req.params.id, (err, failure) => {
            if(err) throw err;
            res.json(failure);
        });
    });
});

router.delete('/:id', (req, res) => {
    Failure.removeFailure(req.params.id, (err, failure) => {
        if(err) throw err;
        res.json({"message": "delete successfuly"});
    });
});

module.exports = router;