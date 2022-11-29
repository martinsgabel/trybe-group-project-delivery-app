'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
      
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      freezeTableName: true,
      timestamps: false,
    });
  },
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
