'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Attractions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parkId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Parks'
        }
      },
      attractionName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      theme: {
        allowNull: false,
        type: Sequelize.STRING
      },
      opened: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      ridersPerVehicle: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      visitedOn: {
        type: Sequelize.DATEONLY
      },
      raiting: {
        type: Sequelize.INTEGER
      },
      comments: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Attractions');
  }
};