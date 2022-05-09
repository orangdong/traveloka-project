# Traveloka Hotel Ranking Optimization API

## About

This is the API for Traveloka Hotel Ranking Optimization. It is a RESTful API that provides access to the users, hotel, and reviews.

## Build with

* [Express](http://expressjs.com/)
* [Node.js](http://nodejs.org/)
* [Prisma](https://www.prisma.io/)
* [MySQL](https://mariadb.org/)

## Installation

_Below is an example of how you can instruct your audience on installing and setting up your app._

1. Clone the repo

   ```sh
   git clone https://github.com/orangdong/traveloka-project.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Copy `.env.example` to `.env` and fill in the missing values.

4. Run prisma migration

   ```sh
   npx prisma migrate dev --name init
   ```

5. Run prisma seeder

    ```sh
    npx prisma db seed
    ```

6. Run the server

## API endpoints
