'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shark_currents_phases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ca: {
        type: Sequelize.FLOAT
      },
      pa: {
        type: Sequelize.INTEGER
      },
      cb: {
        type: Sequelize.FLOAT
      },
      pb: {
        type: Sequelize.INTEGER
      },
      cc: {
        type: Sequelize.FLOAT
      },
      pc: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('shark_currents_phases');
  }
};