'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('user_logins', 'username');
    await queryInterface.removeColumn('user_logins', 'password');
    await queryInterface.removeColumn('user_logins', 'email');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('user_logins', 'username', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('user_logins', 'password', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('user_logins', 'email', {
      type: Sequelize.STRING,
    });
  }
};
