'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('n611_lowcurrent_sensors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      current1: {
        type: Sequelize.FLOAT
      },
      current2: {
        type: Sequelize.FLOAT
      },
      current3: {
        type: Sequelize.FLOAT
      },
      current4: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('n611_lowcurrent_sensors');
  }
};