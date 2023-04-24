'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('user_logins', 'username', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });

    await queryInterface.addColumn('user_logins', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });
    await queryInterface.addColumn('user_logins', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.addColumn('user_logins', 'name', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('user_logins', 'store_name', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });

    await queryInterface.addColumn('user_logins', 'phone_number', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('user_logins', 'username');
    await queryInterface.removeColumn('user_logins', 'password');
    await queryInterface.removeColumn('user_logins', 'email');
  }
};
