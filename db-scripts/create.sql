CREATE TABLE `person` (
  `person_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`person_id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO person (`first_name`, `last_name`) VALUES ('Alice', 'Jones');
INSERT INTO person (`first_name`, `last_name`) VALUES ('Bob', 'Smith');
INSERT INTO person (`first_name`, `last_name`) VALUES ('Charlie', 'Daniels');


