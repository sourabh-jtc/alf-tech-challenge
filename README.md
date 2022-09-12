# alf-tech-challenge

## How to Setup Project

`npm i` and `npm run start` should start server on PORT = 5000

## API Documentation

1. GET Products according to filter provided in query param

`GET /products` - To get the all products available.

If we provide query params ( /products?category=laptop) then all the products except `category = laptop` will be returned

API Response (With status code `200` for successful request) -

```
[
    {
        "belowThousandProducts": [
            {
                "_id": "631f232136f9e04003e8722d",
                "name": "bell keyboard",
                "price": 600,
                "category": "keyboard",
                "specifications": [
                    {
                        "_id": "631f5eb549ace5c96718a753",
                        "key": "wireless",
                        "value": "yes"
                    }
                ]
            },
        ],
        "equaltoOrAboveThousandProducts": [
            {
                "_id": "631f232136f9e04003e87227",
                "name": "bell laptop",
                "price": 60000,
                "category": "laptop",
                "specifications": [
                    {
                        "_id": "631f5eb549ace5c96718a74d",
                        "key": "ram",
                        "value": "6GB"
                    },
                    {
                        "_id": "631f5eb549ace5c96718a74e",
                        "key": "processor",
                        "value": "i7"
                    }
                ]
            },
        ]
    }
]

```

2. Place Order

`POST /orders` - To place order.

Request Body -

```
{
    "product": {
        "name": "bell laptop",
        "category": "laptop"
    },
    "quantity": 10
}

```

API Response (With status code `201` for successful request) -

```
{
    "product": {
        "name": "bell laptop",
        "category": "laptop"
    },
    "quantity": 10,
    "_id": "631f5d8949ace5c96718a74a",
    "__v": 0
}

```
