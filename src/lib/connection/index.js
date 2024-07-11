const mongoose = require('mongoose');
const config = require('../../config');
const logger = require('../helpers/loggerHelpers');


const DB_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
};

// Initialize connection retry counter
let reconnectTriesAlready = 1;
const reconnectTries = 3;

// Connect to database with timeout and retry
const connectWithRetry = () => {
    mongoose
        .connect(config.dbURI, DB_OPTIONS)
        .then(() => {
            console.log('connected to db');
            // Connected successfully
            logger.info('********* MongoDB connected successfully *********');
            // Reset retry counter
            reconnectTriesAlready = 1;
        })
        .catch(async (err) => {
            console.log('connection to db failed');

            // Connection failed
            logger.error(`********* ERROR: MongoDB connection failed ${err.message} *********`);
            // Compare retries made already to maximum retry count
            if (reconnectTriesAlready <= reconnectTries) {
                // Increment retry counter
                reconnectTriesAlready += 1;
                // Reconnect retries made already has not exceeded maximum retry count
                logger.error(
                    `********* MongoDB connection retry after ${DB_OPTIONS.serverSelectionTimeoutMS} seconds *********`,
                );
                // Connection retry
                setTimeout(connectWithRetry, DB_OPTIONS.serverSelectionTimeoutMS);
            } else {
                process.exit(1);
            }
        });
};

connectWithRetry();
