'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
   
  }
};
