'use strict';
const db = require('../models')

function loadFrequencyPf (req,res) {
    console.log('GET /load_frequency')
    db.shark_frequency_pf.findOne({
        order: [['id', 'DESC']]
    }).then((data) => {
        res.json(data).id
    });
}

function loadLineNorVoltages (req,res) {
    db.shark_line_normalized_voltages.findOne({
        order: [['id', 'DESC']]
    }).then((data) => {
        res.json(data).id
    });
}

function loadCurrentsPhases (req,res) {
    db.shark_currents_phases.findOne({
        order: [['id', 'DESC']]
    }).then((data) => {
        res.json(data).id
    });
}

function loadPowers (req,res) {
    db.shark_powers.findOne({
        order: [['id', 'DESC']]
    }).then((data) => {
        res.json(data).id
    });
}

function loadEnergies (req,res) {
    db.shark_energies.findOne({
        order: [['id', 'DESC']]
    }).then((data) => {
        res.json(data).id
    });
}

function loadN611Powers (req,res) {
    db.n611_powers.findOne({
        order: [['id', 'DESC']]
    }).then((data) => {
        res.json(data).id
    });
}

module.exports = {
    loadFrequencyPf,
    loadLineNorVoltages,
    loadPowers,
    loadEnergies,
    loadCurrentsPhases,
    loadN611Powers
}