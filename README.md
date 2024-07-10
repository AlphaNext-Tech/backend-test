# Competitor Analysis API

## Overview

This project is a basic API for an application that provides competitor analysis. The features include:

- Creation of a Competitor Profile: The profile includes the business name, type, and location. Metrics such as website traffic (dummy data) are also included.
- Viewing Competitor Details: Shows detailed metrics for each competitor, including website traffic and top-performing pages (dummy data).

## Special Build Instructions

To run the project, follow these steps:

1. Install the dependencies:
    ```sh
    npm install
    ```

2. Start the server:
    ```sh
    npm start
    ```

## Third-Party Libraries

- **express**: Used to build the API server.
- **body-parser**: Used to parse incoming request bodies.

## API Documentation

The API documentation and test requests can be found in the https://documenter.getpostman.com/view/15034996/2sA3e498p4. Test this endpoint in the publish postman url
## Project Structure

- `src/index.js`: Main application file.
- `src/routes/competitors.js`: Routes for competitor profiles.
- `src/controller/competitors.js`: logic for the creation and fetching of competitors.

## Usage

### Create a Competitor Profile

- **Method**: POST
- **URL**: `/competitors`
- **Body**:
  ```json
  {
      "businessName": "Example Business",
      "type": "Retail",
      "location": "New York"
  }


### Additions

Several technologies can be integrated to create a robust application than the dummy data, such as Content Delivery Platform and Goggle Analytic API. The database can be more structures than an array to use a MongoDB for the flexibility of data storage and large data.