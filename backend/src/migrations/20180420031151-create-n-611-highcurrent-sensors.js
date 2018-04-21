'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('n611_highcurrent_sensors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      current5: {
        type: Sequelize.FLOAT
      },
      current6: {
        type: Sequelize.FLOAT
      },
      current7: {
        type: Sequelize.FLOAT
      },
      current8: {
        type: Sequelize.FLOAT
      },
      current9: {
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
    return queryInterface.dropTable('n611_highcurrent_sensors');
  }
};