'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('product_tables', 'product_name');
    await queryInterface.removeColumn('product_tables', 'price');
    await queryInterface.removeColumn('product_tables', 'img_src');
    await queryInterface.removeColumn('product_tables', 'category');
    await queryInterface.removeColumn('product_tables', 'description');
    await queryInterface.removeColumn('product_tables', 'stock');
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('product_tables', 'product_name', {type: Sequelize.STRING});
    await queryInterface.addColumn('product_tables', 'price', {type: Sequelize.INTEGER});
    await queryInterface.addColumn('product_tables', 'img_src', {type: Sequelize.STRING});
    await queryInterface.addColumn('product_tables', 'category', {type: Sequelize.STRING});
    await queryInterface.addColumn('product_tables', 'description', {type: Sequelize.STRING});
    await queryInterface.addColumn('product_tables', 'stock', {type: Sequelize.INTEGER});

  }
};
