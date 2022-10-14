CREATE TABLE ingredients( 

   id int AUTO_INCREMENT,

   name VARCHAR(50) NOT NULL, 

   PRIMARY KEY(id), 

   UNIQUE(name) 

); 

  

CREATE TABLE seasons( 

   id int AUTO_INCREMENT, 

   name VARCHAR(50), 

   PRIMARY KEY(id) 

); 

  

CREATE TABLE courses( 

   id int AUTO_INCREMENT, 

   menu VARCHAR(50), 

   PRIMARY KEY(id) 

); 

  

CREATE TABLE permissions( 

   id int AUTO_INCREMENT, 

   role VARCHAR(50), 

   PRIMARY KEY(id) 

); 

  

CREATE TABLE users( 

   id int AUTO_INCREMENT, 

   lastname VARCHAR(30) NOT NULL, 

   firstname VARCHAR(39), 

   mail VARCHAR(150) NOT NULL, 

   password VARCHAR(50), 

   idPermissions INT NOT NULL, 

   PRIMARY KEY(id), 

   UNIQUE(mail), 

   FOREIGN KEY(idPermissions) REFERENCES permissions(id) 

); 

  

CREATE TABLE recipes( 

   id int AUTO_INCREMENT, 

   name VARCHAR(50) NOT NULL, 

   slug VARCHAR(50) NOT NULL, 

   description VARCHAR(400) NOT NULL, 

   guests TINYINT, 

   created_at DATETIME, 

   updated_at DATETIME, 

   idCourses INT NOT NULL, 

   idSeasons INT, 

   idUser INT NOT NULL, 

   PRIMARY KEY(id), 

   UNIQUE(slug), 

   FOREIGN KEY(idCourses) REFERENCES courses(id), 

   FOREIGN KEY(idSeasons) REFERENCES seasons(id), 

   FOREIGN KEY(idUser) REFERENCES users(id) 

); 

  

CREATE TABLE steps( 

   id int AUTO_INCREMENT,

   content TEXT, 

   idRecipies INT NOT NULL, 

   PRIMARY KEY(id), 

   FOREIGN KEY(idRecipies) REFERENCES recipes(id) 

); 

  

CREATE TABLE images( 

   id int AUTO_INCREMENT,

   url VARCHAR(250), 

   alternate_text VARCHAR(200), 

   idRecipies INT NOT NULL, 

   PRIMARY KEY(id), 

   FOREIGN KEY(idRecipies) REFERENCES recipes(id) 

); 

  

CREATE TABLE ingredients_recipes( 

   idIngredients INT, 

   idRecipies INT, 

   quantty DOUBLE, 

   PRIMARY KEY(idIngredients, idRecipies), 

   FOREIGN KEY(idIngredients) REFERENCES ingredients(id), 

   FOREIGN KEY(idRecipies) REFERENCES recipes(id) 

); 