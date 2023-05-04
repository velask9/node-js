# JavaScript Node Express API Assignments
Add your work in your student directory and submit a PR for each exercise.

# Database
Before you get started with the excerises, run the following script on your local database:

```
CREATE TABLE `car` (
  `car_id` INT NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(45) NULL,
  `make` VARCHAR(45) NULL,
  `color` VARCHAR(45) NULL,
  `price` INT NULL,
  PRIMARY KEY (`car_id`));

insert into car (model, make, color, price) values ('Mazda6', 'Mazda', 'white', 30000);
insert into car (model, make, color, price) values ('Corvette', 'Chevy', 'red', 50400);
insert into car (model, make, color, price) values ('Mustang', 'Ford', 'blue', 33000);
insert into car (model, make, color, price) values ('Camaro', 'Chevy', 'green', 33000);
insert into car (model, make, color, price) values ('Bronco', 'Ford', 'black', 43000);
insert into car (model, make, color, price) values ('458', 'Ferrari', 'red', 250000);
```

# Ex. 1 Hello World
Create the following endpoint in your `index.js` file in your student directory:

|Verb|Path         |Body|Description                                  |
|----|-------------|----|---------------------------------------------|
|GET |/message     |NA  |Returns {"message": "Hello World}            |

Create a new request in Postman for this endpoint and export the Postman collection to your student directory.

Submit a PR when finished.

# Ex. 2 Get Car

Create the following endpoint in your `index.js` file in your student directory:

|Verb|Path         |Body|Description                                  |
|----|-------------|----|---------------------------------------------|
|GET |/cars/{id}    |NA  |Returns a row from the car table             |

Usage:
GET /cars/6

Response:
```
{
    "car_id": 6,
    "model": "458",
    "make": "Ferrari",
    "color": "red",
    "price": 250000
}
```

There's no need to harden this endpoint (validation, etc).  Focus on getting the basic functionality built first.  We will harden these endpoints at the end.

Use the MySqlProxy approach for accessing data from the database.  Don't for get to create the `PromisePool.js` in your student directory.

Create a new request in Postman for this endpoint and export the Postman collection to your student directory.

Submit a PR when finished.

# Ex. 3 Get Car for Make

Create the following endpoint in your `index.js` file in your student directory:

|Verb|Path         |Body|Description                                  |
|----|-------------|----|---------------------------------------------|
|GET |/cars?make={make}    |NA  |Returns all the cars for this particular make            |


Usage:
GET /cars?make=Ford

Response:
```
[
    {
        "car_id": 3,
        "model": "Mustang",
        "make": "Ford",
        "color": "blue",
        "price": 33000
    },
    {
        "car_id": 5,
        "model": "Bronco",
        "make": "Ford",
        "color": "black",
        "price": 43000
    }
]
```

Create a new request in Postman for this endpoint and export the Postman collection and save it in your student directory.

Submit a PR when finished.

# Ex. 4 Post Car

Create the following endpoint in your `index.js` file in your student directory:

|Verb|Path         |Body|Description                                  |
|----|-------------|----|---------------------------------------------|
|POST |/cars       |See below  |Adds a car to the car table           |     


Usage: POST /cars
Body:
```
{
    "make" : "Toyota",
    "model": "Corolla",
    "color" : "Gray",
    "price" : 30000
}
```

Example Response:
{
    "carId": 8,
    "make": "Toyota",
    "model": "Corolla",
    "color": "Gray",
    "price": 30000
}

Create a new request in Postman for this endpoint and export the Postman collection and save it in your student directory.

Submit a PR when finished.

# Ex. 5 Put Car
Create the following endpoint in your `index.js` file in your student directory:

|Verb|Path         |Body|Description                                  |
|----|-------------|----|---------------------------------------------|
|PUT |/cars       |See below  |Updates a car in the car table         |     


Usage: PUT /cars
Body:
```
{
    "carId" : 1,
    "make": "Mazda",
    "model" : "Mazda6",
    "price" : 30000,
    "color" : "silver"
}
```

Example Response:
```
{
    "message": "Rows matched: 1  Changed: 1  Warnings: 0"
}
```

Create a new request in Postman for this endpoint and export the Postman collection and save it in your student directory.

Submit a PR when finished.

# Ex. 6 Delete Car

Create the following endpoint in your `index.js` file in your student directory:

|Verb|Path         |Body|Description                                  |
|----|-------------|----|---------------------------------------------|
|DELETE |/cars/{id}|NA  |Deletes a car from the car table             |   

Usage:
DELETE /cars/1

Example Response:
```
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
}
````

Create a new request in Postman for this endpoint and export the Postman collection and save it in your student directory.

Submit a PR when finished.

# Ex. 7 Harden Car Endpoints
Harden the car endpoint appropriately.  Add 404 response codes and validation logic where appropriate.

Submit a PR when finished.
