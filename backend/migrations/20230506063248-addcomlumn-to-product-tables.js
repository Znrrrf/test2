'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('product_tables', 'product_name', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('product_tables', 'user_seller_id', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
    await queryInterface.addColumn('product_tables', 'price', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
    await queryInterface.addColumn('product_tables', 'img_src', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('product_tables', 'category', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('product_tables', 'description', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('product_tables', 'stock', {
      type: Sequelize.INTEGER,
      allowNull: false
    });

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeColumn('product_tables', 'product_name');
    await queryInterface.removeColumn('product_tables', 'price');
    await queryInterface.removeColumn('product_tables', 'img_src');
    await queryInterface.removeColumn('product_tables', 'category');
    await queryInterface.removeColumn('product_tables', 'description');
    await queryInterface.removeColumn('product_tables', 'stock');

  }
};
