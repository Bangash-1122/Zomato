# Zomato

A small Node.js and Express backend scaffold for a food-ordering application. The current checkout contains backend starter code; a frontend implementation and a complete ordering API are not currently included in the tracked project files.

## Current functionality

- `GET /` returns `Hello World!`.
- The server listens on port `3001` by default. Set `PORT` to use a different port.
- MongoDB connection is attempted at `mongodb://localhost:27017/food-view`.
- Authentication files are only scaffolding. The auth router is not mounted by the application, and its registration route currently returns a static response rather than creating an account.

## Requirements

- Node.js and npm versions supported by the installed dependencies.
- MongoDB running locally, unless you change the connection URI in `Backend/src/db/db.js`.

## Run locally

From the project root:

```sh
cd Backend
npm install
node server.js
```

The server starts on `http://localhost:3001` by default. Visit `/` to check the response.

The package does not currently define a start script or a real test suite; its `npm test` script exits with “Error: no test specified”.

## Project layout

```text
Backend/
  server.js                    Starts the HTTP server and initiates the database connection
  src/
    app.js                     Express app and root health-style response
    controllers/
      auth.controller.js       Unwired registration handler scaffold
    db/
      db.js                    Mongoose connection
    models/
      userModel.js             User schema
    routes/
      auth.routes.js           Unmounted placeholder auth route
```

## Security and production readiness

This repository is a development scaffold, not a production-ready service. The security review did not identify an exploitable vulnerability in the currently reachable application. However, the unfinished registration code passes a submitted password directly to a plain string field in the user model. Do not connect or expose that handler, or use real credentials, until password hashing and appropriate input validation are implemented. The controller also references a model filename that does not match the model file currently in the repository.

The MongoDB connection URI is hard-coded for local development. Before deployment, load database credentials from a protected environment or secret store and use an appropriately secured database connection. Add authentication protections, request validation, and automated tests before exposing user or order functionality.
