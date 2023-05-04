CREATE TABLE `person` (
  `person_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`person_id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO person (`first_name`, `last_name`) VALUES ('Alice', 'Jones');
INSERT INTO person (`first_name`, `last_name`) VALUES ('Bob', 'Smith');
INSERT INTO person (`first_name`, `last_name`) VALUES ('Charlie', 'Daniels');


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
