'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('genders', [{
      gnr_name: 'Male',
      gnr_alias: 'M',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
    
    await queryInterface.bulkInsert('genders', [{
      gnr_name: 'Female',
      gnr_alias: 'F',
      created_at: new Date(),
      updated_at: new Date()
    }], {});

    await queryInterface.bulkInsert('genders', [{
      gnr_name: 'Other',
      gnr_alias: 'O',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('genders', null, {});    
  }
};
