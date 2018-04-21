'use strict';
module.exports = (sequelize, DataTypes) => {
  var n611_highcurrent_sensors = sequelize.define('n611_highcurrent_sensors', {
    current5: DataTypes.FLOAT,
    current6: DataTypes.FLOAT,
    current7: DataTypes.FLOAT,
    current8: DataTypes.FLOAT,
    current9: DataTypes.FLOAT
  }, {});
  n611_highcurrent_sensors.associate = function(models) {
    // associations can be defined here
  };
  return n611_highcurrent_sensors;
};