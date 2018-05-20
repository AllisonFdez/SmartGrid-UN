const MeasurementsCtrl = require('./controllers/MeasurementsController')
const LoadCtrl = require('./controllers/LoadController')

module.exports = (app) => {
    app.get('/', (req, res)=>{
        res.send('Welcome to the Backend of the Smart grid of the Universidad del Norte.');
    });

    //Routes for save data into the DB.
    app.get('/frequency', MeasurementsCtrl.getFrequencyPf);
    app.get('/line_voltages_phases', MeasurementsCtrl.getLineVoltagesPhases);
    app.get('/line_voltages_nor', MeasurementsCtrl.getLineNorVoltages);
    app.get('/currents_phases', MeasurementsCtrl.getCurrentsPhases);
    app.get('/phase_voltages', MeasurementsCtrl.getPhaseVoltages);
    app.get('/powers', MeasurementsCtrl.getPowers);
    app.get('/energies', MeasurementsCtrl.getEnergies);
    app.get('/voltage_sensors', MeasurementsCtrl.getN611VoltageSensors);
    app.get('/low_current_sensors', MeasurementsCtrl.getN611LowCurrentSensors);
    app.get('/high_current_sensors', MeasurementsCtrl.getN611HighCurrentSensors);
    app.get('/node_powers', MeasurementsCtrl.getN611Powers);
    app.get('/control', MeasurementsCtrl.getN611Control);
    
    //Routes for fetch data from the DB.
    app.get('/load_frequency', LoadCtrl.loadFrequencyPf);
    app.get('/load_line_voltages_nor', LoadCtrl.loadLineNorVoltages);
    app.get('/load_currents_phases', LoadCtrl.loadCurrentsPhases);
    app.get('/load_powers', LoadCtrl.loadPowers);
    app.get('/load_energies', LoadCtrl.loadEnergies);
    app.get('/load_node_powers', LoadCtrl.loadN611Powers);
    app.get('/load_control', LoadCtrl.loadN611Control);
}