## Running the app

Ensure NodeJS is installed on your machine, otherwise download and install from (https://nodejs.org/en) If yarn is not installed, simply run `npm install -g yarn` to install it. <br>
First create a .env file at the root of the project, and add the environment variables included in the email:

DATABASE_URI=

### Installation

```bash
$ yarn install
```

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Assumptions
1. No provisions for auth is required
2. PATCH/PUT endpoints were not specified
3. Environment variables were not added to version control (but were included in my response email)

## Documentation

After starting the app, find the documentation [here](http://localhost:3000/api/v1/docs) or copy and paste in localhost:3000/api/v1/docs 
into your browser

## 3rd-party Libraries Used
1. **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses modern JavaScript, is built with TypeScript (preserving compatibility with pure JavaScript), and combines elements of OOP (Object-Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

2. **@nestjs/config**: Provides a way to manage and access configuration variables in a NestJS application. It allows for a consistent way to access configuration settings across the application.

3. **@nestjs/jwt**: This package is used for implementing JSON Web Token (JWT) authentication in a NestJS application. It provides utilities for signing and verifying JWTs, enabling secure authentication mechanisms.

4. **@nestjs/mongoose**: Integrates Mongoose, a MongoDB object modeling tool, with NestJS. It allows for defining schemas, models, and interacting with MongoDB databases using a more structured approach.

5. **@nestjs/swagger**: Facilitates the integration of Swagger, a tool for documenting and testing APIs, with NestJS applications. It allows developers to generate interactive API documentation based on decorators used in the code.

6. **class-transformer**: This package is used to transform plain JavaScript objects into class instances and vice versa. It helps in mapping properties and applying transformations to objects, which is useful for serialization and deserialization.

7. **class-validator**: Provides a set of decorators and utility functions for validating class properties in TypeScript. It is used to enforce validation rules on DTOs (Data Transfer Objects) to ensure the correctness of data passed to the application.

8. **mongoose**: A MongoDB object modeling tool for Node.js, used to define schemas, create models, and interact with MongoDB databases. It is the core library that provides the data modeling functionality used by `@nestjs/mongoose`.


## License

Nest is [MIT licensed](LICENSE).
