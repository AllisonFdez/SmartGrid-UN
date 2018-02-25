'use strict';
module.exports = (sequelize, DataTypes) => {
  var shark_energies = sequelize.define('shark_energies', {
    watth: DataTypes.INTEGER,
    varh: DataTypes.INTEGER,
    vash: DataTypes.INTEGER
  }, {});
  shark_energies.associate = function(models) {
    // associations can be defined here
  };
  return shark_energies;
};