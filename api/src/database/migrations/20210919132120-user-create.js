'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false 
      },
      usr_name: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      usr_mail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gnr_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{model: 'genders', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION'
      },
      usr_born:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      usr_phone:{
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
    await queryInterface.dropTable('users');
  }
};
