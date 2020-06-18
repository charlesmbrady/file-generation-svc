const path = require('path'); // Lets us use __dirname as the relative filepath from this file
require('dotenv').config();

module.exports = {
  development: {
    // aka "staging"
    username: process.env.STAGE_USER,
    password: process.env.STAGE_PASSWORD,
    database: process.env.STAGE_DATABASE_NAME,
    details: {
      host: process.env.STAGE_HOST,
      port: 3306,
      dialect: 'mysql',
    },
  },
  test: {
    // aka "local"
    use_env_variable: 'TEST_DATABASE_URL',
    username: process.env.LOCAL_USER,
    password: process.env.LOCAL_PASSWORD,
    database: process.env.LOCAL_DATABASE_NAME,
    details: {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
    },
  },
  production: {
    use_env_variable: 'JAWSDB_URL',
    username: process.env.PROD_USER,
    password: process.env.PROD_PASSWORD,
    database: process.env.PROD_DATABASE_NAME,
    details: {
      host: process.env.PROD_HOST,
      port: 3306,
      dialect: 'mysql',
    },
  },
};
