'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shark_line_voltages_phases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vab: {
        type: Sequelize.FLOAT
      },
      pab: {
        type: Sequelize.INTEGER
      },
      vbc: {
        type: Sequelize.FLOAT
      },
      pbc: {
        type: Sequelize.INTEGER
      },
      vca: {
        type: Sequelize.FLOAT
      },
      pca: {
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
    return queryInterface.dropTable('shark_line_voltages_phases');
  }
};