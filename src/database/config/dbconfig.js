/* eslint-disable @typescript-eslint/no-var-requires */
'use-strict';

const dotenv = require('dotenv');
dotenv.config();

const config = {
  databaseHost: process.env.DATABASE_HOST,
  databaseName: process.env.DATABASE_NAME,
  databaseUser: process.env.DATABASE_USER,
  databasePassword: process.env.DATABASE_PASSWORD,
  databasePort: +process.env.DATABASE_PORT,
};

module.exports = {
  development: {
    username: config.databaseUser,
    password: config.databasePassword,
    database: config.databaseName,
    host: config.databaseHost,
    port: config.databasePort,
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  },
  sandbox: {
    username: config.databaseUser,
    password: config.databasePassword,
    database: config.databaseName,
    host: config.databaseHost,
    port: config.databasePort,
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  },
  test: {
    username: config.databaseUser,
    password: config.databasePassword,
    database: config.databaseName,
    host: config.databaseHost,
    port: config.databasePort,
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  },
  production: {
    username: config.databaseUser,
    password: config.databasePassword,
    database: config.databaseName,
    host: config.databaseHost,
    port: config.databasePort,
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  },
};
