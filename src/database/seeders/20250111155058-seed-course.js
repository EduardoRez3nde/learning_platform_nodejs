'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  const [categories] = await queryInterface.sequelize.query("SELECT id FROM categories");

  await queryInterface.bulkInsert("courses", [
    {
      name: 'Node.js Backend Development',
      synopsis: 'Learn to build scalable backend applications using Node.js.',
      thumbnail_url: 'https://example.com/images/nodejs.jpg',
      featured: true,
      category_id: categories[0]?.id, // Relaciona ao primeiro ID de categoria
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Introduction to Data Science',
      synopsis: 'Explore the fundamentals of data analysis and machine learning.',
      thumbnail_url: 'https://example.com/images/datascience.jpg',
      featured: false,
      category_id: categories[1]?.id, // Relaciona ao segundo ID de categoria
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Computer Science Essentials',
      synopsis: 'Dive into algorithms, data structures, and computational theory.',
      thumbnail_url: 'https://example.com/images/computerscience.jpg',
      featured: false,
      category_id: categories[2]?.id, // Relaciona ao terceiro ID de categoria
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'DevOps for Beginners',
      synopsis: 'Understand the principles of CI/CD, containerization, and cloud deployment.',
      thumbnail_url: 'https://example.com/images/devops.jpg',
      featured: true,
      category_id: categories[3]?.id, // Relaciona ao quarto ID de categoria
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("courses", null, { });
}
