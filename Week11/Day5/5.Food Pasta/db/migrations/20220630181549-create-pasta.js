'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pasta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      label: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      taste: {
        allowNull: false,
        type: Sequelize.DECIMAL(3,1)
      },
      noodleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Noodles'
        }
      },
      sauceId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Sauces'
        }
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
    await queryInterface.dropTable('Pasta');
  }
};