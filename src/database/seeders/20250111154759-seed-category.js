'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert("categories", [
    { 
      name: 'Backend',
      position: 1,
      created_at: new Date(),
      updated_at: new Date()
    },
    { 
      name: 'Data-Science',
      position: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    { 
      name: 'Computer-science',
      position: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    { 
      name: 'Devops',
      position: 4,
      created_at: new Date(),
      updated_at: new Date()
    },
    { 
      name: 'Design-System',
      position: 5,
      created_at: new Date(),
      updated_at: new Date()
    },

  ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('categories', null, {});
}
