'use strict';
module.exports = (sequelize, DataTypes) => {
  var shark_phase_voltages = sequelize.define('shark_phase_voltages', {
    va: DataTypes.FLOAT,
    vb: DataTypes.FLOAT,
    vc: DataTypes.FLOAT
  }, {});
  shark_phase_voltages.associate = function(models) {
    // associations can be defined here
  };
  return shark_phase_voltages;
};