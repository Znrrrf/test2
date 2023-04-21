'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.removeColumn('user_logins', 'name');
    await queryInterface.removeColumn('user_logins', 'phone_number');
    await queryInterface.removeColumn('user_logins', 'store_name');
    await queryInterface.removeColumn('user_logins', 'username');
    await queryInterface.removeColumn('user_logins', 'password');
    await queryInterface.removeColumn('user_logins', 'email');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.createTable('user_logins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      store_name: {
        type: Sequelize.STRING
      },
      phone_number: {
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
  }
};
