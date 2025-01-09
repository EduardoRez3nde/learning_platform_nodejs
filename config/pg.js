import dotenv from "dotenv";

dotenv.config();

export default {
  development: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    dialect: process.env.PG_DIALECT,
  }
}