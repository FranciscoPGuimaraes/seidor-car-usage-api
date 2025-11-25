# Car Usage API

This project is a simple **Web API** built with **Node.js**,
**Express**, and **Jest**, designed for managing:

-   Cars\
-   Drivers\
-   Car Usage Records

It was developed as part of a technical test and includes unit tests for
all API routes using **Supertest + Jest**.

------------------------------------------------------------------------

## Features

### Cars

-   Create car\
-   List cars (with filters: brand, color)\
-   Get car by ID\
-   Update car\
-   Delete car

### Drivers

-   Create driver\
-   List drivers\
-   Get driver by ID\
-   Update driver\
-   Delete driver

### Usage Records

-   Register usage\
-   List usage\
-   Calculate fuel cost\
-   Return usage by driver or car

------------------------------------------------------------------------

## Project Structure

    src/
    ├── controllers/
    │   ├── CarsController.js
    │   ├── DriversController.js
    │   └── UsageController.js
    ├── models/
    │   ├── Car.js
    │   ├── Driver.js
    │   └── Usage.js
    ├── repositories/
    │   ├── CarsRepository.js
    │   ├── DriversRepository.js
    │   └── UsageRepository.js
    ├── services/
    │   ├── CarsService.js
    │   ├── DriversService.js
    │   └── UsageService.js
    ├── routes/
    │   ├── cars.routes.js
    │   ├── drivers.routes.js
    │   └── usage.routes.js
    └── app.js
    └── server.js

------------------------------------------------------------------------

## Running Tests

All tests use **Jest** and **Supertest**.

Run:

``` bash
npm run test
```

------------------------------------------------------------------------

## Running the API

### Install dependencies:

``` bash
npm install
```

### Start in dev mode:

``` bash
npm run dev
```

### Start in production:

``` bash
npm start
```

Server will run at:

    http://localhost:3000

------------------------------------------------------------------------

## API Endpoints Summary

## Cars

| Method | Route     | Description                                   |
|--------|-----------|-----------------------------------------------|
| POST   | /cars     | Create a new car                              |
| GET    | /cars     | List cars (with query filter by color/brand)  |
| GET    | /cars/:id | Get car by ID                                 |
| PUT    | /cars/:id | Update car                                    |
| DELETE | /cars/:id | Delete car                                    |

---

## Drivers

| Method | Route        | Description                               |
|--------|--------------|--------------------------------------------|
| POST   | /drivers     | Create driver                              |
| GET    | /drivers     | List drivers (with query filter by name)   |
| GET    | /drivers/:id | Get by ID                                  |
| PUT    | /drivers/:id | Update driver                              |
| DELETE | /drivers/:id | Delete driver                              |

---

## Usage

| Method | Route               | Description     |
|--------|---------------------|-----------------|
| POST   | /usage              | Register usage  |
| GET    | /usage              | List all usage  |
| PATCH  | /usage/:id/finish   | Finish usage    |

## Technologies Used

-   Node.js
-   Express
-   Jest
-   Supertest
-   ES Modules (ESM)
-   UUID

------------------------------------------------------------------------

## Author

**Francisco Pereira Guimarães**\
Software Engineering
