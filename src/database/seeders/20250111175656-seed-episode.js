'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  const [courses] = await queryInterface.sequelize.query("SELECT id FROM courses");

  await queryInterface.bulkInsert("episodes", [
    {
      name: 'Introduction to Node.js',
      synopsis: 'Understand the basics of Node.js and its applications.',
      order: 1,
      video_url: 'https://example.com/videos/intro-nodejs.mp4',
      seconds_long: 600,
      course_id: courses[0]?.id, // Relaciona ao primeiro ID de curso
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Advanced Node.js Patterns',
      synopsis: 'Learn advanced techniques for building scalable applications.',
      order: 2,
      video_url: 'https://example.com/videos/advanced-nodejs.mp4',
      seconds_long: 1200,
      course_id: courses[0]?.id, // Relaciona ao primeiro ID de curso
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Data Science Basics',
      synopsis: 'Explore data science foundations, including data cleaning and visualization.',
      order: 1,
      video_url: 'https://example.com/videos/datascience-basics.mp4',
      seconds_long: 900,
      course_id: courses[1]?.id, // Relaciona ao segundo ID de curso
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Introduction to Docker',
      synopsis: 'Learn the fundamentals of Docker and containerization.',
      order: 1,
      video_url: 'https://example.com/videos/docker-intro.mp4',
      seconds_long: 700,
      course_id: courses[3]?.id, // Relaciona ao quarto ID de curso
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('episodes', null, {});
}
