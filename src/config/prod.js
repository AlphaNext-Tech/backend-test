module.exports = {
    appName: process.env.APP_NAME,
    port: process.env.PORT,
    dbURI: process.env.MONGODB_URI_DEV,
    SWAGGER_UI_BASE_URL: process.env.SWAGGER_UI_BASE_URL,
    clientBaseUrl: process.env.CLIENT_BASE_URL,
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    api: {
        prefix: {
            v1: process.env.API_PREFIX_V1,
        },
    },
};
