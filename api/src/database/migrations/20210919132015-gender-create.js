'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('genders', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      gnr_name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      gnr_alias:{
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('genders');    
  }
};
