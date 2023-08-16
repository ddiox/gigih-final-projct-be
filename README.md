# Mid Term Project (Backend Only)

This repository contains the backend of the Tokopedia Play Clone App for Final Project from the Generasi Gigih 3.0 program.

## Database Structure

Database Structure using ERD diagram
![alt text](https://github.com/ddiox/gigih-final-projct-be/blob/master/docs/db.png?raw=true)
we can see that there are 3 collections in the database:

- videos
- products
- comments

## Project Structure

- /database is used to set up and establish a connection to the database in a Node.js application using MongoDB.
- /models would contain all the schema files.
- /controllers would contain all the functions for the APIs.
- /routes would contain all the routes using Express Router.
- server.js would basically be the entry point of the Express application and should be as minimal as possible.
- .env or .env.example is used to store environment variables in a Node.js application.

## Video Endpoint

- video object

```
{
    "_id": ObjectId,
    "title": String,
    "description": String,
    "url" : String,
    "thumbnailUrl": String
}
```

## **GET /videos**

Returns all videos thumbnails.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```
[
    {
        "_id": ObjectId,
        "title": String,
        "description": String,
        "url" : String,
        "thumbnailUrl": String
    },
]
```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **GET /videos/:id**

Returns single videos by id.

- **URL Params**  
  \_id
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```

{
    "_id": ObjectId,
    "title": String,
    "description": String,
    "url" : String,
    "thumbnailUrl": String
}

```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **POST /videos**

Create video.

- **URL Params**  
  None
- **Data Params**  
  title, description, url, thumbnailUrl
- **Headers**  
  None
- **Success Response:**
  - Code: 201
  - Content:

```

{
    "_id": ObjectId,
    "title": String,
    "description": String,
    "url" : String,
    "thumbnailUrl": String
}

```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **PUT /videos/:id**

Update video.

- **URL Params**  
  \_id
- **Data Params**  
  title, description, url, thumbnailUrl
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```

{
    "_id": ObjectId,
    "title": String,
    "description": String,
    "url" : String,
    "thumbnailUrl": String
}

```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **DELETE /videos/:id**

Delete video.

- **URL Params**  
  \_id
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```

{
     "message": "Video Deleted"
}

```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## Product Endpoint

- product object

```
{
    "_id": ObjectId,
    "videoID": ObjectId,
    "title": String,
    "description": String,
    "imageUrl": String,
    "link": String,
    "price": Float
}
```

## **GET /videos/:videoID/products**

Returns all products with specified videoID.

- **URL Params**  
  videoID (ObjectId)
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```
[
    {
        "_id": ObjectId,
        "title": String,
        "description": String,
        "imageUrl": String,
        "link": String,
        "price": Float
    },
]
```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **GET /products**

Returns all products.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```
[
    {
        "_id": ObjectId,
        "videoID": ObjectId,
        "title": String,
        "description": String,
        "imageUrl": String,
        "link": String,
        "price": Float
    }
]
```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **GET /products/:id**

Returns single products by id.

- **URL Params**  
  \_id
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```

{
    "_id": ObjectId,
    "videoID": ObjectId,
    "title": String,
    "description": String,
    "imageUrl": String,
    "link": String,
    "price": Float
}
```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **POST /products**

Create product.

- **URL Params**  
  None
- **Data Params**  
  videoID, title, description, imageUrl, link, price
- **Headers**  
  None
- **Success Response:**
  - Code: 201
  - Content:

```

{
    "_id": ObjectId,
    "videoID": ObjectId,
    "title": String,
    "description": String,
    "imageUrl": String,
    "link": String,
    "price": Float
}

```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **PUT /products/:id**

Update products.

- **URL Params**  
  \_id
- **Data Params**  
  videoID, title, description, url, imageUrl, link, price
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```

{
    "_id": ObjectId,
    "videoID": ObjectId,
    "title": String,
    "description": String,
    "imageUrl": String,
    "link": String,
    "price": Float
}

```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **DELETE /products/:id**

Delete product.

- **URL Params**  
  \_id
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```

{
     "message": "Product Deleted"
}

```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## Comment Endpoint

- comment object

```
{
    "_id": ObjectId,
    "videoID": ObjectId,
    "username": String,
    "comment": String,
    "timestamp": Date
}
```

## **GET /videos/:videoID/comments**

Returns all comments with specified videoID.

- **URL Params**  
  videoID (ObjectId)
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```
[
    {
        "_id": ObjectId,
        "username": String,
        "comment": String,
        "timestamp": Date
    },
]
```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **POST /submit-content**

Create a new comment with specified videoID.

- **URL Params**  
  None
- **Data Params**  
  username,
  comment,
  videoID
- **Headers**  
  None
- **Success Response:**
  - Code: 201
  - Content:

```
{
    "success": true
}
```

- **Error Response:**
  - Code: 500
  - Content:

```
{
    "message": "Server Error",
    "success": false
}
```

## **GET /comments/:id**

Returns single comments by id.

- **URL Params**  
  \_id
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```

{
    "_id": ObjectId,
    "videoID": ObjectId,
    "username": String,
    "comment": String,
    "timestamp": Date
}
```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **POST /comments**

Create comments.

- **URL Params**  
  None
- **Data Params**  
  videoID, username, comment, timestamp
- **Headers**  
  None
- **Success Response:**
  - Code: 201
  - Content:

```

{
    "_id": ObjectId,
    "videoID": ObjectId,
    "username": String,
    "comment": String,
    "timestamp": Date
}

```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **PUT /comments/:id**

Update comments.

- **URL Params**  
  \_id
- **Data Params**  
  videoID, username, comment, timestamp
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```

{
    "_id": ObjectId,
    "videoID": ObjectId,
    "username": String,
    "comment": String,
    "timestamp": Date
}

```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```

## **DELETE /products/:id**

Delete comemnts.

- **URL Params**  
  \_id
- **Data Params**  
  None
- **Headers**  
  None
- **Success Response:**
  - Code: 200
  - Content:

```

{
     "message": "Comment Deleted"
}

```

- **Error Response:**
  - Code: 505
  - Content:

```
{
    "message": "Server Error"
}
```
