-- DROP DATABASE checkedOutUser;
CREATE DATABASE checkedoutuser;

USE checkedoutuser;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255),
  addressline VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zipcode VARCHAR(255),
  creditcard VARCHAR(255),
  PRIMARY KEY (id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
