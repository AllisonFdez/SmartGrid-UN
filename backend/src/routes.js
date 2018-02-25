const MeasurementsCtrl = require('./controllers/MeasurementsController')

module.exports = (app) => {
    app.get('/', (req, res)=>{
        res.send('Hello world');
    });

    app.get('/frequency', MeasurementsCtrl.getFrequencyPf);
    app.get('/line_voltages_phases', MeasurementsCtrl.getLineVoltagesPhases);
    app.get('/currents_phases', MeasurementsCtrl.getCurrentsPhases);
    app.get('/phase_voltages', MeasurementsCtrl.getPhaseVoltages);
    app.get('/powers', MeasurementsCtrl.getPowers);
    app.get('/energies', MeasurementsCtrl.getEnergies);

}