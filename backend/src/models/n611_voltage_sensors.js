'use strict';
module.exports = (sequelize, DataTypes) => {
  var n611_voltage_sensors = sequelize.define('n611_voltage_sensors', {
    voltage1: DataTypes.FLOAT,
    voltage2: DataTypes.FLOAT,
    voltage3: DataTypes.FLOAT
  }, {});
  n611_voltage_sensors.associate = function(models) {
    // associations can be defined here
  };
  return n611_voltage_sensors;
};