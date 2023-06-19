'use strict';

const { dateConversor } = require('../utils/date');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Leonardo',
        email: 'leo@email.com',
        password: '123123',
        role: 'admin',
        created_at: dateConversor(),
        updated_at: dateConversor(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
