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
    ```sh
    npm run dev
    ```
## API endpoints
Base URL : http://localhost:5000

### User
| Endpoint | Description | Parameter | Method|
| ------ | ------ | ------ | ------ |
| [/users](http://localhost:5000/users) | Get All Users | - | GET |
| [/users/:id](http://localhost:5000/users/1) | Get User by Id | id | GET |
| [/users](http://localhost:5000/users) | Create New User | - | POST |
| [/users/:id](http://localhost:5000/users/1) | Update User by Id | id | PUT |
| [/users/:id](http://localhost:5000/users/1) | Delete User by Id | id | DELETE |
| [/users/:id/reviews](http://localhost:5000/users/1/reviews) | Get All Reviews by Spesific User Id | id | GET |
| [/users/reviews](http://localhost:5000/users/reviews) | Get All Users and Reviews | - | GET |
| [/users/reviews](http://localhost:5000/users/reviews) | Get All Users and Reviews | - | GET |
Usage
```sh
curl -XGET 'http://localhost:5000/users'
```
Response
```json
{
    "id": "ID"
}
```
### Hotel
| Endpoint | Description | Parameter | Method|
| ------ | ------ | ------ | ------ |
| [/hotels](http://localhost:5000/hotels) | Get All Hotels | - | GET |
| [/hotels/:id](http://localhost:5000/hotels/1) | Get Hotel by Id | id | GET |
| [/hotels/:id/reviews](http://localhost:5000/hotels/1/reviews) | Get All Reviews by Spesific Hotel Id | id | GET |
| [/hotels/reviews](http://localhost:5000/hotels/reviews) | Get All Hotels and Reviews | - | GET |

### Review
| Endpoint | Description | Parameter | Method|
| ------ | ------ | ------ | ------ |
| [/reviews](http://localhost:5000/reviews) | Get All Reviews | - | GET |
| [/reviews/:id](http://localhost:5000/reviews/1) | Get Review by Id | id | GET |
| [/reviews](http://localhost:5000/reviews) | Create New Review | - | POST |
| [/reviews/:id](http://localhost:5000/reviews/1) | Delete Review by Id | id | DELETE |