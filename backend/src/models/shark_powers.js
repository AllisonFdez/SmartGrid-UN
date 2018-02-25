'use strict';
module.exports = (sequelize, DataTypes) => {
  var shark_powers = sequelize.define('shark_powers', {
    watt: DataTypes.FLOAT,
    var: DataTypes.FLOAT,
    vas: DataTypes.FLOAT
  }, {});
  shark_powers.associate = function(models) {
    // associations can be defined here
  };
  return shark_powers;
};