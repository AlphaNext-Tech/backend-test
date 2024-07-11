# Backend Test Project

## Project API

## Main Technology Used

- Express: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in 
  code and the representation of those objects in MongoDB.
- Morgan: HTTP request logger middleware for Node.js. It simplifies logging requests to the console.
- Express Validator: A set of express.js middlewares that wraps validator.js functions to validate and sanitize request input


## Setup

To setup the app,

1. Clone the app to your local machine and run `npm install`

2. Provide local credentials for running the app the `src/config/dev.js`

3. Then run `npm start` for production 

4. Then run `npm run start:dev` for development 

**NOTE** The variables provided in `variables.env` is for the staging env and so for development purpose, you should config `dev.js`. 


## Folder Structure

```
Basekart-api/
  .github
  node_modules/
  src/
    components
      competitor
        competitor.controller.js
        competitor.model.js
        competitor.routes.js
        competitor.service.js
        competitor.validator.js
    config
      ci.js
      dev.js
      prod.js
    library
      helpers
        errorFormatHelpers.js
        loggerHelpers.js
        responseHelpers.js
      middlewares
        errorHandler.js
    app.js
    server.js
  .env
  .eslintrc.js
  .gitignore
  package-lock.json
  package.json
  README.md
```

The core of the app can be found in the `src` folder has illustrated above. This is a small app, and I have structured the app to make it easier to enable microservices in the future. To achieve this, we have broken down the contents in the `components` folder into modules. At the moment, there's just few modules which are the **competitors**  module.
If you need more details on this architecture, you can find that by searching for _node best practices_ on GitHub

## How to contribute

You can start contributing to the codebase once you're done with your local setup.



## Rest API Documentation

-   To access the local endpoints route [here](http://localhost:5000/api-doc/)



## LICENCE


Make sure to replace placeholders like `<your-mongodb-uri>` and `<your-port>` with actual values and adjust the repository URL and project structure as needed. This README provides a clear overview of the project, setup instructions, usage, and dependencies.
