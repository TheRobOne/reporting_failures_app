const express = require('express');
const router = express.Router();

let FailuresType = require('../models/failures_type');

router.get('/', (req, res, next) => {
    FailuresType.getFailuresTypes((err, failuresTypes) => {
        if(err) throw err;
        res.json(failuresTypes);
    });
});

router.get('/:id', (req, res, next) => {
    FailuresType.getFailuresTypeById(req.params.id, (err, failuresType) => {
        if(err) throw err;
        res.json(failuresType);
    });
});

router.post('/', (req, res, next) => {
    FailuresType.addFailuresType(req.body, (err, failuresType) => {
        if(err) throw err;
        res.json(failuresType);
    });
})

router.put('/:id', (req, res, next) => {
    FailuresType.updateFailuresType(req.params.id, req.body, (err, failuresType) => {
        if(err) throw err;
        FailuresType.getFailuresTypeById(req.params.id, (err, failuresType) => {
            if(err) throw err;
            res.json(failuresType);
        });
    });
});

router.delete('/:id', (req, res, next) => {
    FailuresType.removeFailuresType(req.params.id, (err, failuresType) => {
        if(err) throw err;
        res.json({"message": "delete successfuly"});
    });
});

module.exports = router;