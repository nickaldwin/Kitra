# Kitra Backend Application
### Introduction

Kitra is a game where users can collect treasures in a given latitude and longitude. Each treasure collected will have points based on its monetary value, and a treasure can have more than one monetary value depending on the user’s luck. Kitra users aim to get the highest monetary value from the treasures they collect.

This application is built using Node.js and Express.js.
Prerequisites

    Node.js (version 14 or above)
    npm (version 6 or above)
    MySQL database

Project Setup

    Clone the repository:

```bash
git clone git@github.com:nickaldwin/Kitra.git
````
cd kitra

Install dependencies:
```bash
npm install
```
Create a .env file in the root directory and add your database credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=kitra
```
Run migrations and seeders to set up the database:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
Start the application:
```

```bash
 npm run start
```
API Endpoints
1. Find Treasures

Endpoint: /api/treasures

Method: GET

Description: Find treasure boxes within a specified distance (1km or 10km) from a given latitude and longitude.

Query Parameters:

    latitude (required): Latitude of the current location.
    longitude (required): Longitude of the current location.
    distance (required): Distance to search within (1 or 10 km).

Example Request:

```bash
GET /api/treasures?latitude=14.552036595352455&longitude=121.01696118771324&distance=1
```
Example Response:


```json
[
    {
        "id": 100,
        "latitude": 14.54376481,
        "longitude": 121.0199117,
        "name": "T1"
    },
    {
        "id": 102,
        "latitude": 14.54464357,
        "longitude": 121.0203656,
        "name": "T3"
    }
    // ... other treasures within the specified distance
]
```
2. Get User Details

Endpoint: /api/users/:id

Method: GET

Description: Retrieve details of a user along with the treasures they have collected.

Path Parameters:

    id (required): The ID of the user.

Example Request:

```bash
GET /api/users/3000
```
Example Response:

```json
{
    "id": 3000,
    "name": "U1",
    "age": 21,
    "password": "123123",
    "email": "u1@kitra.abc",
    "treasures": [
        {
            "id": 100,
            "latitude": 14.54376481,
            "longitude": 121.0199117,
            "name": "T1",
            "money_values": [
                {
                    "treasure_id": 100,
                    "amt": 20
                }
            ]
        }
        // ... other treasures collected by the user
    ]
}
```

Project Structure
```
kitra/
├── node_modules/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── treasureController.js
│   │   └── userController.js
│   ├── migrations/
│   ├── models/
│   │   ├── index.js
│   │   ├── moneyValue.js
│   │   ├── treasure.js
│   │   └── user.js
│   ├── routes/
│   │   ├── treasureRoutes.js
│   │   └── userRoutes.js
│   ├── seeders/
│   │   ├── 20240618000000-seed-treasures.js
│   │   ├── 20240618000001-seed-users.js
│   │   └── 20240618000002-seed-money-values.js
│   └── server.js
├── .env
├── package.json
├── package-lock.json
└── README.md
````
Running the Application

    Install Dependencies:
```bash
npm install
```
Run Migrations (if any):

```bash
npx sequelize-cli db:migrate
```
Run Seeders:

```bash
npx sequelize-cli db:seed:all
```
Start the Server:

```bash
npm run start
```
Additional Information

    Nodemon: If you're using nodemon for development, you can start the server with:
```bash
npm run dev
```
Environment Variables: Make sure to configure your .env file properly with the correct database credentials.
