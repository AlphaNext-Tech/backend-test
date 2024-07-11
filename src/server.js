require('./lib/connection');
const cluster = require('cluster');
const http = require('http');
const https = require('https');
const debug = require('debug');
const { isNaN } = require('lodash');
const app = require('./app');
const config = require('./config');
const logger = require('./lib/helpers/loggerHelpers');
const { handleError, errorHandlers } = require('./lib/middlewares/errorHandler');

const PORT = process.env.PORT || config.port;

if (process.env.NODE_ENV === 'production') {
    app.use(handleError);
    app.use(errorHandlers);
}


/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
    const serverPort = parseInt(val, 10);

    if (isNaN(serverPort)) {
        // named pipe
        return val;
    }

    if (serverPort >= 0) {
        // port number
        return serverPort;
    }

    return false;
};


const serverPort = normalizePort(PORT || '4000');
app.set('port', serverPort);

/**
 * Create HTTP server.
 */
let server;

if (process.env.NODE_ENV === 'production' && process.env.VENV === 'production') {
    server = https.Server(options, app);
} else {
    server = http.createServer(app);
    logger.info('http server is up');
}

const onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof serverPort === 'string' ? `Pipe ${serverPort}` : `Port ${serverPort}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error; 
    }
};

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;

    logger.info(`Listening on ${bind}`);
    debug(`Listening on ${bind}`);
};

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(serverPort, () => {
    console.log(`served on port ${serverPort}`);
});
server.on('error', onError);
server.on('listening', onListening);

// Cluster API has a variety of events.
// Here we are creating a new process if a worker die.
cluster.on('exit', (worker) => {
    logger.info(`Worker ${worker.id} died'`);
    logger.info('Staring a new one...');
    cluster.fork();
});



