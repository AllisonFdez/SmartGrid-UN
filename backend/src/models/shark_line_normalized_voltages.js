'use strict';
module.exports = (sequelize, DataTypes) => {
  var shark_line_normalized_voltages = sequelize.define('shark_line_normalized_voltages', {
    vab_n: DataTypes.FLOAT,
    vbc_n: DataTypes.FLOAT,
    vca_n: DataTypes.FLOAT
  }, {});
  shark_line_normalized_voltages.associate = function(models) {
    // associations can be defined here
  };
  return shark_line_normalized_voltages;
};