'use strict';
const db = require('../models')

function getFrequencyPf (req,res) {
    console.log('GET /frequency')
    console.log('This:', req.query)
    console.log('This is freq:', req.query.freq)
    console.log('This is pf:', req.query.pf)
    db.shark_frequency_pf.create({
        freq: req.query.freq,
        pf: req.query.pf,
    }).then((data_frequency_pf) => {
        res.json(data_frequency_pf);
    });
}

module.exports = {
    getFrequencyPf
}