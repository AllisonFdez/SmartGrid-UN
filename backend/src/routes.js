const MeasurementsCtrl = require('./controllers/MeasurementsController')

module.exports = (app) => {
    app.get('/', (req, res)=>{
        res.send('Hello world');
    });

    app.get('/frequency', MeasurementsCtrl.getFrequencyPf);

}