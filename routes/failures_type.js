const express = require('express');
const router = express.Router();

let FailuresType = require('../models/failures_type');

router.get('/', (req, res) => {
    FailuresType.getFailuresTypes((err, failuresTypes) => {
        if(err) throw err;
        res.json(failuresTypes);
    });
});

router.get('/:id', (req, res) => {
    FailuresType.getFailuresTypeById(req.params.id, (err, failuresType) => {
        if(err) throw err;
        res.json(failuresType);
    });
});

router.post('/', (req, res) => {
    FailuresType.addFailuresType(req.body, (err, failuresType) => {
        if(err) throw err;
        res.json(failuresType);
    });
})

router.put('/:id', (req, res) => {
    FailuresType.updateFailuresType(req.params.id, req.body, (err, failuresType) => {
        if(err) throw err;
        FailuresType.getFailuresTypeById(req.params.id, (err, failuresType) => {
            if(err) throw err;
            res.json(failuresType);
        });
    });
});

router.delete('/:id', (req, res) => {
    FailuresType.removeFailuresType(req.params.id, (err, failuresType) => {
        if(err) throw err;
        res.json({"message": "delete successfuly"});
    });
});

module.exports = router;