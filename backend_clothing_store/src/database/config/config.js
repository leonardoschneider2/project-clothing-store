import 'dotenv/config';

export default {
  development: {
    username: process.env.DATABASE_DEV_USER,
    password: process.env.DATABASE_DEV_PASSWORD,
    database: process.env.DATABASE_DEV_NAME,
    host: process.env.DATABASE_DEV_HOST,
    dialect: process.env.DATABASE_DEV_DIALECT,
    port: process.env.DATABASE_DEV_PORT
  },
  test: {
    username: process.env.DATABASE_TEST_USER,
    password: process.env.DATABASE_TEST_PASSWORD,
    database: process.env.DATABASE_TEST_NAME,
    host: process.env.DATABASE_TEST_HOST,
    dialect: process.env.DATABASE_TEST_DIALECT,
    port: process.env.DATABASE_TEST_PORT
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    port: process.env.DATABASE_PORT
  }
}
