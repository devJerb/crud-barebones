# CRUD Barebones

This is a task completion of Application and Systems Integration delving into the life cycle of server and client communication by creating an API.

An example of student log creation with their demographics being stored into an NRDBMS.

The purpose of this task shows the simple architecture involved in writing an API

1. `app.js` provides the instance of the server ran on a port (currently on `https://localhost:5000`); also contains the middleware packages for every request that happens there are functions being executed asynchronously.

2. `api.js` contains all the CRUD methods to communicate with client-to-server then stored into the database.

3. `Student.js` model as a Schema to be created into the database.

## Installation

Prior to running a localhost server, don't forget to `cd crud-barebones` to install the necessary dependencies found on your `package.json` file

For Windows/Linux users

`npm install`

For yarn users

`yarn install`

## API Reference
With the usage of [Postman](https://www.postman.com/) for testing the API, these are the methods that can be done

`POST hostname:port/students/`

| param   | type | desc       |
|---------|------|------------|
| id      | int  | student ID |
| first   | str  | first name |
| surname | str  | last name  |

You can specifically get all by

`GET hostname:port/students/`

Or have a specific ID targeted

`GET hostname:port/students/:studentId`

| param | type |
|-------|------|
| id    | int  |

`UPDATE hostname:port/students/:studentId`

| param | type |
|-------|------|
| id    | int  |

`DELETE hostname:port/students/:studentId`

| param | type |
|-------|------|
| id    | int  |
