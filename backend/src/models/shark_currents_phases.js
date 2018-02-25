'use strict';
module.exports = (sequelize, DataTypes) => {
  var shark_currents_phases = sequelize.define('shark_currents_phases', {
    ca: DataTypes.FLOAT,
    pa: DataTypes.INTEGER,
    cb: DataTypes.FLOAT,
    pb: DataTypes.INTEGER,
    cc: DataTypes.FLOAT,
    pc: DataTypes.INTEGER
  }, {});
  shark_currents_phases.associate = function(models) {
    // associations can be defined here
  };
  return shark_currents_phases;
};