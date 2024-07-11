const fs = require('fs');
const config = require('./config');
const logger = require('./lib/helpers/loggerHelpers');

const requestUrl = config.REQUEST_URL;

fs.readFile('swagger.yaml', 'utf8', (err, data) => {
    if (err) {
        logger.error(err);
        process.exit(1);
    }

    const updatedData = data.replace('{requestUrl}', requestUrl);

    fs.writeFile('swagger.yaml', updatedData, 'utf8', (writeErr) => {
        if (writeErr) {
            logger.error(writeErr);
            process.exit(1);
        }
    });
});
