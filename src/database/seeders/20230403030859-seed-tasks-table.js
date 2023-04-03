'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [{
      title: 'atividade 01',
      description: 'Execução da atividade 01.',
      complete: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      title: 'atividade 02',
      description: 'Execução da atividade 02.',
      complete: true,
      created_at: new Date(),
      updated_at: new Date(),
      complete_at: new Date()
    },  {
      title: 'atividade 03',
      description: 'Execução da atividade 03.',
      complete: true,
      created_at: new Date(),
      updated_at: new Date(),
      complete_at: new Date()
    },     
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
