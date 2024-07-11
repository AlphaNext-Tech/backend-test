const envFound = require('dotenv').config({ path: `.env` });
// const logger = require('../lib/helpers/loggerHelpers')

if (!envFound) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

console.log('Environment currently is ' + process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else if (process.env.NODE_ENV === 'staging') {
    module.exports = require('./staging');
} else {
    module.exports = require('./dev');
}
