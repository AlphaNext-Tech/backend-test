const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const routes = require('./components/routes');
const handler = require('./lib/helpers/errorHandlers');
const config = require('./config');

const app = express();


// Middleware for serving API documentation (Swagger)
const swaggerDocument = YAML.load('./swagger.yaml');
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
        baseUrl: process.env.SWAGGER_UI_BASE_URL,
    }),
);

// Middleware for logging HTTP requests
app.use(morgan('dev'));


// Middleware for CORS
app.use(cors());

// Middleware for parsing JSON and URL-encoded data
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ limit: '2mb', extended: true }));



// Middleware for sanitizing MongoDB queries
app.use(mongoSanitize());

// Routes
app.use(config.api.prefix.v1, routes);

// Root route
app.get('/', (req, res) => {
    res.status(200).send('OK');
});


app.all('*', (req, res) => {
    res.status(404).send('')
})


// Error handling middleware
handler.handleErrors(app);

module.exports = app;
