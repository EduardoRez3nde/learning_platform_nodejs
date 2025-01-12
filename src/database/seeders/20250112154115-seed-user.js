'use strict';

import bcrypt from "bcrypt";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  const hashedPassword = await bcrypt.hash("12345", 10);

  await queryInterface.bulkInsert("users", [
    {
      first_name: "Admin",
      last_name: "User",
      phone: "555-5555",
      birth: "1990-01-01",
      email: "admin@email.com",
      password: hashedPassword,
      role: "admin",
      created_at: new Date(),
      updated_at: new Date()
    },
  ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("users", {
    where: { email: "admin@email.com" }
  });
}
