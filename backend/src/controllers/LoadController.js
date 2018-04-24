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

function loadLineVoltagesPhases (req,res) {
    console.log('GET /load_line_voltages_phases')
    db.shark_line_voltages_phases.findOne({
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

module.exports = {
    loadFrequencyPf,
    loadLineVoltagesPhases,
    loadPowers,
    loadEnergies,
    loadCurrentsPhases
}