'use strict';
module.exports = (sequelize, DataTypes) => {
  var n611_powers = sequelize.define('n611_powers', {
    red: DataTypes.FLOAT,
    panel: DataTypes.FLOAT,
    batteries: DataTypes.FLOAT
  }, {});
  n611_powers.associate = function(models) {
    // associations can be defined here
  };
  return n611_powers;
};