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

Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/malikilamalik/workspace/public-api/collection/21127042-17b016b5-1d7a-4e5a-8c6d-ce18f733c520?ctx=documentation)

### User
| Endpoint | Description | Parameter | Method|
| ------ | ------ | ------ | ------ |
| [/users](http://localhost:5000/users) | Get All Users | - | GET |
| [/users/:id](http://localhost:5000/users/1) | Get User by Id | id | GET |
| [/users](http://localhost:5000/users) | Create New User | - | POST |
| [/users/:id](http://localhost:5000/users/1) | Update User by Id | id | PUT |
| [/users/:id](http://localhost:5000/users/1) | Delete User by Id | id | DELETE |
| [/users/reviews](http://localhost:5000/users/reviews) | Get All Users and Reviews | - | GET |
| [/users/:id/reviews](http://localhost:5000/users/1/reviews) | Get All Reviews by Spesific User Id | id | GET |

Usage
```sh
curl -X GET http://localhost:5000/users
```
Response
```json
{
  "status": "success",
  "message": null,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@email.com",
      "phone": "+55 11 99999-9999",
      "image": "https://avatars2.githubusercontent.com/u/174825?s=460&v=4",
      "created_at": "2022-05-12T10:36:11.026Z",
      "updated_at": "2022-05-12T10:36:11.026Z"
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane@email.com",
      "phone": "+55 11 99999-9999",
      "image": "https://avatars2.githubusercontent.com/u/174821?s=460&v=4",
      "created_at": "2022-05-12T10:36:11.032Z",
      "updated_at": "2022-05-12T10:36:11.032Z"
    },
    {
      "id": 3,
      "name": "John Smith",
      "email": "johnsmith@email.com",
      "phone": "+55 11 99999-9999",
      "image": "https://avatars2.githubusercontent.com/u/174822?s=460&v=4",
      "created_at": "2022-05-12T10:36:11.038Z",
      "updated_at": "2022-05-12T10:36:11.038Z"
    },
    {
      "id": 4,
      "name": "Jane Smith",
      "email": "janesmith@email.com",
      "phone": "+55 11 99999-9999",
      "image": "https://avatars2.githubusercontent.com/u/174823?s=460&v=4",
      "created_at": "2022-05-12T10:36:11.044Z",
      "updated_at": "2022-05-12T10:36:11.044Z"
    },
    {
      "id": 5,
      "name": "John Bob",
      "email": "johnbob@email.com",
      "phone": "+55 11 99999-9999",
      "image": "https://avatars2.githubusercontent.com/u/174824?s=460&v=4",
      "created_at": "2022-05-12T10:36:11.048Z",
      "updated_at": "2022-05-12T10:36:11.048Z"
    }
  ]
}
```

Usage
```sh
curl -X GET http://localhost:5000/users/1
```
Response
```json
{
  "status": "success",
  "message": null,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@email.com",
    "phone": "+55 11 99999-9999",
    "image": "https://avatars2.githubusercontent.com/u/174825?s=460&v=4",
    "created_at": "2022-05-12T10:36:11.026Z",
    "updated_at": "2022-05-12T10:36:11.026Z"
  }
}
```

Usage
```sh
curl -X DELETE http://localhost:5000/users/1
```
Response
```json
{
    "status": "success",
    "message": "user deleted"
}
```

Usage
```sh
curl -X GET http://localhost:5000/users/reviews
```
Response
```json
{
    "status": "success",
    "message": "success get review",
    "data": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@email.com",
            "phone": "+55 11 99999-9999",
            "image": "https://avatars2.githubusercontent.com/u/174825?s=460&v=4",
            "created_at": "2022-05-12T10:36:11.026Z",
            "updated_at": "2022-05-12T10:36:11.026Z",
            "reviews": [
                {
                    "id": 1,
                    "user_id": 1,
                    "hotel_id": 1,
                    "rating": 1,
                    "comment": "Makanannya tidak sesuai dengan selera saya, tidak ada pecel dan lalapan.",
                    "created_at": "2022-05-12T10:36:11.057Z",
                    "updated_at": "2022-05-12T10:36:11.057Z"
                }
            ]
        },
        {
            "id": 2,
            "name": "Jane Doe",
            "email": "jane@email.com",
            "phone": "+55 11 99999-9999",
            "image": "https://avatars2.githubusercontent.com/u/174821?s=460&v=4",
            "created_at": "2022-05-12T10:36:11.032Z",
            "updated_at": "2022-05-12T10:36:11.032Z",
            "reviews": []
        },
        {
            "id": 3,
            "name": "John Smith",
            "email": "johnsmith@email.com",
            "phone": "+55 11 99999-9999",
            "image": "https://avatars2.githubusercontent.com/u/174822?s=460&v=4",
            "created_at": "2022-05-12T10:36:11.038Z",
            "updated_at": "2022-05-12T10:36:11.038Z",
            "reviews": []
        },
        {
            "id": 4,
            "name": "Jane Smith",
            "email": "janesmith@email.com",
            "phone": "+55 11 99999-9999",
            "image": "https://avatars2.githubusercontent.com/u/174823?s=460&v=4",
            "created_at": "2022-05-12T10:36:11.044Z",
            "updated_at": "2022-05-12T10:36:11.044Z",
            "reviews": []
        },
        {
            "id": 5,
            "name": "John Bob",
            "email": "johnbob@email.com",
            "phone": "+55 11 99999-9999",
            "image": "https://avatars2.githubusercontent.com/u/174824?s=460&v=4",
            "created_at": "2022-05-12T10:36:11.048Z",
            "updated_at": "2022-05-12T10:36:11.048Z",
            "reviews": []
        }
    ]
}
```

Usage
```sh
curl -X GET http://localhost:5000/users/1/reviews
```
Response
```json
{
    "status": "success",
    "message": "success get review",
    "data": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@email.com",
            "phone": "+55 11 99999-9999",
            "image": "https://avatars2.githubusercontent.com/u/174825?s=460&v=4",
            "created_at": "2022-05-12T10:36:11.026Z",
            "updated_at": "2022-05-12T10:36:11.026Z",
            "reviews": [
                {
                    "id": 1,
                    "user_id": 1,
                    "hotel_id": 1,
                    "rating": 1,
                    "comment": "Makanannya tidak sesuai dengan selera saya, tidak ada pecel dan lalapan.",
                    "created_at": "2022-05-12T10:36:11.057Z",
                    "updated_at": "2022-05-12T10:36:11.057Z"
                }
            ]
        }
    ]
}
```

### Hotel
| Endpoint | Description | Parameter | Method|
| ------ | ------ | ------ | ------ |
| [/hotels](http://localhost:5000/hotels) | Get All Hotels | - | GET |
| [/hotels/:id](http://localhost:5000/hotels/1) | Get Hotel by Id | id | GET |
| [/hotels/:id/reviews](http://localhost:5000/hotels/1/reviews) | Get All Reviews by Spesific Hotel Id | id | GET |
| [/hotels/reviews](http://localhost:5000/hotels/reviews) | Get All Hotels and Reviews | - | GET |

Usage
```sh
curl -X GET http://localhost:5000/hotels
```
Response
```json
{
    "status": "success",
    "message": null,
    "data": [
        {
            "id": 1,
            "name": "InterContinental Hotel Dago Pakar Bandung",
            "address": "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Mekarsaluyu, Kec. Cimenyan, Kota Bandung, Jawa Barat 40198, Indonesia",
            "image": "https://ak-d.tripcdn.com/images/220r0u000000j8qbf8514_Z_1080_808_R5_D.jpg",
            "description": "Hotel Bintang 5 di Bandung",
            "created_at": "2022-05-12T10:36:11.051Z",
            "updated_at": "2022-05-12T10:36:11.051Z"
        }
    ]
}
```


Usage
```sh
curl -X GET http://localhost:5000/hotels/1
```
Response
```json
{
    "status": "success",
    "message": "Show Route id: 1",
    "data": {
        "id": 1,
        "name": "InterContinental Hotel Dago Pakar Bandung",
        "address": "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Mekarsaluyu, Kec. Cimenyan, Kota Bandung, Jawa Barat 40198, Indonesia",
        "image": "https://ak-d.tripcdn.com/images/220r0u000000j8qbf8514_Z_1080_808_R5_D.jpg",
        "description": "Hotel Bintang 5 di Bandung",
        "created_at": "2022-05-12T10:36:11.051Z",
        "updated_at": "2022-05-12T10:36:11.051Z"
    }
}
```

Usage
```sh
curl -X GET http://localhost:5000/hotels/reviews
```
Response
```json
{
    "status": "success",
    "message": "success get review",
    "data": [
        {
            "id": 1,
            "name": "InterContinental Hotel Dago Pakar Bandung",
            "address": "Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Mekarsaluyu, Kec. Cimenyan, Kota Bandung, Jawa Barat 40198, Indonesia",
            "image": "https://ak-d.tripcdn.com/images/220r0u000000j8qbf8514_Z_1080_808_R5_D.jpg",
            "description": "Hotel Bintang 5 di Bandung",
            "created_at": "2022-05-12T10:36:11.051Z",
            "updated_at": "2022-05-12T10:36:11.051Z",
            "reviews": [
                {
                    "id": 1,
                    "user_id": 1,
                    "hotel_id": 1,
                    "rating": 1,
                    "comment": "Makanannya tidak sesuai dengan selera saya, tidak ada pecel dan lalapan.",
                    "created_at": "2022-05-12T10:36:11.057Z",
                    "updated_at": "2022-05-12T10:36:11.057Z"
                }
            ]
        }
    ]
}
```

Usage
```sh
curl -X GET http://localhost:5000/hotels/1/reviews
```
Response
```json
{
    "status": "success",
    "message": "success get review",
    "data": [
        {
            "id": 1,
            "user_id": 1,
            "hotel_id": 1,
            "rating": 1,
            "comment": "Makanannya tidak sesuai dengan selera saya, tidak ada pecel dan lalapan.",
            "created_at": "2022-05-12T10:36:11.057Z",
            "updated_at": "2022-05-12T10:36:11.057Z"
        }
    ]
}
```


### Review
| Endpoint | Description | Parameter | Method|
| ------ | ------ | ------ | ------ |
| [/reviews](http://localhost:5000/reviews) | Get All Reviews | - | GET |
| [/reviews/:id](http://localhost:5000/reviews/1) | Get Review by Id | id | GET |
| [/reviews](http://localhost:5000/reviews) | Create New Review | - | POST |
| [/reviews/:id](http://localhost:5000/reviews/1) | Delete Review by Id | id | DELETE |

Usage
```sh
curl -X GET http://localhost:5000/reviews
```
Response
```json
{
    "status": "success",
    "message": null,
    "data": [
        {
            "id": 1,
            "user_id": 1,
            "hotel_id": 1,
            "rating": 1,
            "comment": "Makanannya tidak sesuai dengan selera saya, tidak ada pecel dan lalapan.",
            "created_at": "2022-05-12T10:36:11.057Z",
            "updated_at": "2022-05-12T10:36:11.057Z"
        }
    ]
}
```

Usage
```sh
curl -X GET http://localhost:5000/reviews/1
```
Response
```json
{
    "status": "success",
    "message": "Show Route id: 1",
    "data": {
        "id": 1,
        "user_id": 1,
        "hotel_id": 1,
        "rating": 1,
        "comment": "Makanannya tidak sesuai dengan selera saya, tidak ada pecel dan lalapan.",
        "created_at": "2022-05-12T10:36:11.057Z",
        "updated_at": "2022-05-12T10:36:11.057Z"
    }
}
```

Usage
```sh
curl -X DELETE http://localhost:5000/reviews/1
```
Response
```json
{
    "status": "success",
    "message": "review deleted"
}
```