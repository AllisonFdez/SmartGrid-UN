'use strict';
module.exports = (sequelize, DataTypes) => {
  var shark_line_voltages_phases = sequelize.define('shark_line_voltages_phases', {
    vab: DataTypes.FLOAT,
    pab: DataTypes.INTEGER,
    vbc: DataTypes.FLOAT,
    pbc: DataTypes.INTEGER,
    vca: DataTypes.FLOAT,
    pca: DataTypes.INTEGER
  }, {});
  shark_line_voltages_phases.associate = function(models) {
    // associations can be defined here
  };
  return shark_line_voltages_phases;
};