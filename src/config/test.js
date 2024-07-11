module.exports = {
    appName: process.env.APP_NAME,
    port: process.env.PORT,
    dbURI: process.env.MONGODB_URI_DEV,
    SWAGGER_UI_BASE_URL: process.env.SWAGGER_UI_BASE_URL,
    REQUEST_URL: process.env.REQUEST_URL || 'localhost:5000',
    SCHEME_TYPE: process.env.SCHEME_TYPE || 'http',
    jwtSecret: '8uvwrehfr34f83834nfv301==2332=RR$T%hfwh34384r132Y%Y349u340tu434',
    tokenType: 'Bearer',
    clientBaseUrl: process.env.CLIENT_BASE_URL,
    expressSessionSescretKey: process.env.EXPRESS_SESSION_SECRET_KEY,
    redisUrl: 'redis://127.0.0.1:6379',
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    api: {
        prefix: {
            v1: process.env.API_PREFIX_V1,
        },
    },
    googleOauth: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    twilio: {
        accountSid: process.env.TWILIO_ACCOUNT_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
        phoneNumber: process.env.TWILIO_PHONE_NUMBER,
        secretKey: process.env.TWILIO_SECRET_KEY,
    },
    cloudinary: {
        CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        API_KEY: process.env.CLOUDINARY_API_KEY,
        API_SECRET: process.env.CLOUDINARY_API_SECRET,
    },
    fcm: {
        project_id: process.env.FCM_PROJECT_ID,
        private_key: process.env.FCM_PRIVATE_KEY,
        client_email: process.env.FCM_CLIENT_EMAIL,
    },
};
