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

5. Run the server
    ```sh
    npm run dev
    ```
## API endpoints
Base URL : http://localhost:5000

Deployment URL : https://traveloka-cloud-run-api-gateway-8q20i5np.ue.gateway.dev (Using JWT Token)

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
| [/users/me](http://localhost:5000/users/me) | Get Current User Profile | - | GET |

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
            "id": "U000001",
            "firebaseId": "TJEkkFIioQZJNqzqBAqsF0B9hpC3",
            "name": "tatsurok2018",
            "city": "San Jose",
            "state": "UnitedStates"
        },
        {
            "id": "U000002",
            "firebaseId": "C5fCymsFSzQMLsUbuRzsONVN4lF2",
            "name": "STEPHEN N",
            "city": "San Francisco",
            "state": "CA"
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
            "id": "U000001",
            "firebaseId": "TJEkkFIioQZJNqzqBAqsF0B9hpC3",
            "name": "tatsurok2018",
            "city": "San Jose",
            "state": "UnitedStates"
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
            "id": "U000001",
            "firebaseId": "TJEkkFIioQZJNqzqBAqsF0B9hpC3",
            "name": "tatsurok2018",
            "city": "San Jose",
            "state": "UnitedStates",
            "reviews": [
                {
                    "id": "R000001",
                    "userId": "U000001",
                    "hotelId": "H000021",
                    "rating": 3,
                    "comment": "This hotel was nice and quiet. Did not know, there was train track near by. But it was only few train passed during our stay. Best Western changed hotel classification. The Plus category are not the same as before."
                }
            ]
        },
        {
            "id": "U000002",
            "firebaseId": "C5fCymsFSzQMLsUbuRzsONVN4lF2",
            "name": "STEPHEN N",
            "city": "San Francisco",
            "state": "CA",
            "reviews": [
                {
                    "id": "R000002",
                    "userId": "U000002",
                    "hotelId": "H001054",
                    "rating": 4,
                    "comment": "We stayed in the king suite with the separation between the bedroom and the living space. The sofa bed wasn't very good I had back discomfort by the day we left on our three night stay. The room is clean, and the king bed very comfortable. This hotel is located within walking distance to most places you will want to... More"
                }
            ]
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
    "data": {
            "id": "U000001",
            "firebaseId": "TJEkkFIioQZJNqzqBAqsF0B9hpC3",
            "name": "tatsurok2018",
            "city": "San Jose",
            "state": "UnitedStates",
            "reviews": [
                {
                    "id": "R000001",
                    "userId": "U000001",
                    "hotelId": "H000021",
                    "rating": 3,
                    "comment": "This hotel was nice and quiet. Did not know, there was train track near by. But it was only few train passed during our stay. Best Western changed hotel classification. The Plus category are not the same as before."
                }
            ]
    }
}
```

Usage
```sh
curl -X GET http://localhost:5000/users/me
```
Response
```json
{
    "status": "success",
    "message": null,
    "data": {
        "id": "U000001",
        "firebaseId": "TJEkkFIioQZJNqzqBAqsF0B9hpC3",
        "name": "tatsurok2018",
        "city": "San Jose",
        "state": "UnitedStates"
    }
}
```

### Hotel
| Endpoint | Description | Parameter | Method|
| ------ | ------ | ------ | ------ |
| [/hotels](http://localhost:5000/hotels) | Get All Hotels | - | GET |
| [/hotels?limit=1&search=bardstown](http://localhost:5000/hotels) | Get All Hotels with offset and limit | search, limit | GET |
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
            "id": "H001000",
            "name": "Bardstown Parkview Motel",
            "address": "418 E Stephen Foster Ave",
            "city": "Bardstown",
            "state": "KY",
            "country": "US",
            "latitude": 37.8,
            "longitude": -85.5,
            "type": "Hotel",
            "image": "https://raw.githubusercontent.com/zulfauzi92/Hotel_Recomendation_Model_Traveloka/main/Hotel%20Images/image%201000.jpg",
            "price": 260000,
            "stars": 0,
            "description": "The standard check-in time is 12:00 PM and the standard check-out time is 11:00 AM. Early check-in or late check-out is strictly subjected to availability and may be chargeable by the hotel. Any early check-in or late check-out request must be directed and reconfirmed with hotel directly Hotel may charge gala dinner supplement on Christmas / New Years eve or other festive periods which need to be paid directly at the hotel.As per the govt guidelines valid govt issued id proofs are required to be presented at the Time of C/in.",
            "hotelFacilities": [
                {
                    "id": 17515,
                    "hotelId": "H001000",
                    "facility": "Baggage Room"
                }
            ],
            "pointOfInterests": [],
            "roomFacilities": [
                {
                    "id": 14011,
                    "hotelId": "H001000",
                    "facility": "Air Conditioning"
                }
            ]
        },
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
            "id": "H001000",
            "name": "Bardstown Parkview Motel",
            "address": "418 E Stephen Foster Ave",
            "city": "Bardstown",
            "state": "KY",
            "country": "US",
            "latitude": 37.8,
            "longitude": -85.5,
            "type": "Hotel",
            "image": "https://raw.githubusercontent.com/zulfauzi92/Hotel_Recomendation_Model_Traveloka/main/Hotel%20Images/image%201000.jpg",
            "price": 260000,
            "stars": 0,
            "description": "The standard check-in time is 12:00 PM and the standard check-out time is 11:00 AM. Early check-in or late check-out is strictly subjected to availability and may be chargeable by the hotel. Any early check-in or late check-out request must be directed and reconfirmed with hotel directly Hotel may charge gala dinner supplement on Christmas / New Years eve or other festive periods which need to be paid directly at the hotel.As per the govt guidelines valid govt issued id proofs are required to be presented at the Time of C/in.",
            "hotelFacilities": [
                {
                    "id": 17515,
                    "hotelId": "H001000",
                    "facility": "Baggage Room"
                }
            ],
            "pointOfInterests": [],
            "roomFacilities": [
                {
                    "id": 14011,
                    "hotelId": "H001000",
                    "facility": "Air Conditioning"
                }
            ]
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
            "id": "H001000",
            "name": "Bardstown Parkview Motel",
            "address": "418 E Stephen Foster Ave",
            "city": "Bardstown",
            "state": "KY",
            "country": "US",
            "latitude": 37.8,
            "longitude": -85.5,
            "type": "Hotel",
            "image": "https://raw.githubusercontent.com/zulfauzi92/Hotel_Recomendation_Model_Traveloka/main/Hotel%20Images/image%201000.jpg",
            "price": 260000,
            "stars": 0,
            "description": "The standard check-in time is 12:00 PM and the standard check-out time is 11:00 AM. Early check-in or late check-out is strictly subjected to availability and may be chargeable by the hotel. Any early check-in or late check-out request must be directed and reconfirmed with hotel directly Hotel may charge gala dinner supplement on Christmas / New Years eve or other festive periods which need to be paid directly at the hotel.As per the govt guidelines valid govt issued id proofs are required to be presented at the Time of C/in.",
            "reviews": [
                {
                    "id": "R003765",
                    "userId": "U003670",
                    "hotelId": "H000001",
                    "rating": 4,
                    "comment": "The staff is polite and professional at all times. I love the fact that checkout is at noon. The free breakfast was delicious! The bed in the room was comfortable. There is a outdoor pool and a nice fitness center."
                },
                {
                    "id": "R003766",
                    "userId": "U003671",
                    "hotelId": "H000001",
                    "rating": 5,
                    "comment": "This is a hidden Gem. We checked in on a Friday evening. Richard was at the front desk. Kind ,great smile and very friendly. Feels like you already knew him. Beautiful rooms, great breakfast spread in the mornings. I needed a bit of information on Saturday and Ms. Reagan was at the front desk. She greets everyone with a warm... More"
                },
                {
                    "id": "R003767",
                    "userId": "U003672",
                    "hotelId": "H000001",
                    "rating": 5,
                    "comment": "This is a great hotel for short and long term stays. Staff are very friendly, Hotel is clean. Includes great breakfast, light dinner and beer and wine in the evening. The hotel shuttle is also very useful for taking to local malls and the airport."
                },
                {
                    "id": "R003768",
                    "userId": "U003673",
                    "hotelId": "H000001",
                    "rating": 4,
                    "comment": "Very friendly staff, clean rooms, great for business travel the evening social and the breakfast eliminates the need to find somewhere to go for breakfast and dinner. Would like more security in parking lot."
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
            "id": "R003765",
            "userId": "U003670",
            "hotelId": "H000001",
            "rating": 4,
            "comment": "The staff is polite and professional at all times. I love the fact that checkout is at noon. The free breakfast was delicious! The bed in the room was comfortable. There is a outdoor pool and a nice fitness center."
        },
        {
            "id": "R003766",
            "userId": "U003671",
            "hotelId": "H000001",
            "rating": 5,
            "comment": "This is a hidden Gem. We checked in on a Friday evening. Richard was at the front desk. Kind ,great smile and very friendly. Feels like you already knew him. Beautiful rooms, great breakfast spread in the mornings. I needed a bit of information on Saturday and Ms. Reagan was at the front desk. She greets everyone with a warm... More"
        },
        {
            "id": "R003767",
            "userId": "U003672",
            "hotelId": "H000001",
            "rating": 5,
            "comment": "This is a great hotel for short and long term stays. Staff are very friendly, Hotel is clean. Includes great breakfast, light dinner and beer and wine in the evening. The hotel shuttle is also very useful for taking to local malls and the airport."
        },
        {
            "id": "R003768",
            "userId": "U003673",
            "hotelId": "H000001",
            "rating": 4,
            "comment": "Very friendly staff, clean rooms, great for business travel the evening social and the breakfast eliminates the need to find somewhere to go for breakfast and dinner. Would like more security in parking lot."
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
            "id": "R000001",
            "userId": "U000001",
            "hotelId": "H000021",
            "rating": 3,
            "comment": "This hotel was nice and quiet. Did not know, there was train track near by. But it was only few train passed during our stay. Best Western changed hotel classification. The Plus category are not the same as before."
        },
        {
            "id": "R000002",
            "userId": "U000002",
            "hotelId": "H001054",
            "rating": 4,
            "comment": "We stayed in the king suite with the separation between the bedroom and the living space. The sofa bed wasn't very good I had back discomfort by the day we left on our three night stay. The room is clean, and the king bed very comfortable. This hotel is located within walking distance to most places you will want to... More"
        },
        {
            "id": "R000003",
            "userId": "U000003",
            "hotelId": "H001054",
            "rating": 3,
            "comment": "Parking was horrible, somebody ran into my rental car while staying there. I didn't get to try the breakfast, I was there for business so the restaurant opened to late for the business world to enjoy, I had to asked for coffee for my room, And the items in the vending machine were stale."
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
        "id": "R000001",
        "userId": "U000001",
        "hotelId": "H000021",
        "rating": 3,
        "comment": "This hotel was nice and quiet. Did not know, there was train track near by. But it was only few train passed during our stay. Best Western changed hotel classification. The Plus category are not the same as before."
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
