DROP DATABASE IF EXISTS cedrus;

CREATE DATABASE cedrus;

USE cedrus;

CREATE TABLE vets (
  id int NOT NULL AUTO_INCREMENT,
  vet_name  varchar(50) NOT NULL,
  vet_location varchar(50) NOT NULL,
  score integer NOT NULL,
  PRIMARY KEY (ID)
);


CREATE TABLE matchedVets (
  id int NOT NULL AUTO_INCREMENT,
  vet_name  varchar(50) NOT NULL,
  vet_location varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);


INSERT INTO vets (vet_name, vet_location, score) VALUES ("Dev", "Edison, NJ", 3);
INSERT INTO vets (vet_name, vet_location, score) VALUES ("Alexa", "Brooklyn, NY", 4);
INSERT INTO vets (vet_name, vet_location, score) VALUES ("John", "New York, NY", 6);
INSERT INTO vets (vet_name, vet_location, score) VALUES ("Jack", "Metuchen, NJ", 1);
INSERT INTO vets (vet_name, vet_location, score) VALUES ("Debbie", "Long Island, NY", 9);
INSERT INTO vets (vet_name, vet_location, score) VALUES ("Parker", "Brooklyn, NY", 3);
INSERT INTO vets (vet_name, vet_location, score) VALUES ("Hanna", "Edgewater, NJ", 7);
INSERT INTO vets (vet_name, vet_location, score) VALUES ("Sam", "Jersey City, NJ", 9);
INSERT INTO vets (vet_name, vet_location, score) VALUES ("Rob", "Hoboken, NJ", 10);


/* mysql -u root < server/schema.sql    */