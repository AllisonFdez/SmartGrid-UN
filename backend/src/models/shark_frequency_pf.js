'use strict';
module.exports = (sequelize, DataTypes) => {
  var shark_frequency_pf = sequelize.define('shark_frequency_pf', {
    freq: DataTypes.FLOAT,
    pf: DataTypes.FLOAT
  }, {});
  shark_frequency_pf.associate = function(models) {
    // associations can be defined here
  };
  return shark_frequency_pf;
};