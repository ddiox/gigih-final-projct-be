# Mid Term Project (Backend Only)

This repository contains the backend of the Tokopedia Play Clone App for Final Project from the Generasi Gigih 3.0 program.

## Database Structure

Database Structure using ERD diagram
![alt text](https://github.com/ddiox/gigih-final-projct-be/blob/master/docs/db.png?raw=true)
we can see that there are 3 collections in the database:

videos
products
comments

## Project Structure

- /database is used to set up and establish a connection to the database in a Node.js application using MongoDB.
- /models would contain all the schema files.
- /controllers would contain all the functions for the APIs.
- /routes would contain all the routes using Express Router.
- server.js would basically be the entry point of the Express application and should be as minimal as possible.
- .env or .env.example is used to store environment variables in a Node.js application.
