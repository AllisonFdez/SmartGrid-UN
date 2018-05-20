'use strict';
module.exports = (sequelize, DataTypes) => {
  var n611_control = sequelize.define('n611_control', {
    state: DataTypes.INTEGER
  }, {});
  n611_control.associate = function(models) {
    // associations can be defined here
  };
  return n611_control;
};