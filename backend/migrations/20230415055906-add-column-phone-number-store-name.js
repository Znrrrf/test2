'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('user_logins', 'store_name', {
      type: Sequelize.STRING,
    });

    await queryInterface.addColumn('user_logins', 'phone_number', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('user_logins', 'store_name');
    await queryInterface.removeColumn('user_logins', 'phone_number');
  }
};
