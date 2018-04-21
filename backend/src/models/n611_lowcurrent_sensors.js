'use strict';
module.exports = (sequelize, DataTypes) => {
  var n611_lowcurrent_sensors = sequelize.define('n611_lowcurrent_sensors', {
    current1: DataTypes.FLOAT,
    current2: DataTypes.FLOAT,
    current3: DataTypes.FLOAT,
    current4: DataTypes.FLOAT
  }, {});
  n611_lowcurrent_sensors.associate = function(models) {
    // associations can be defined here
  };
  return n611_lowcurrent_sensors;
};