CREATE TABLE drinks (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	drink_name varchar(255) NOT NULL,
	pick_up BOOLEAN DEFAULT false,
  	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO drinks (drink_name, pick_up) VALUES ('Vodka Stinger', false);
INSERT INTO drinks (drink_name, pick_up) VALUES ('Cape Cod', false);
INSERT INTO drinks (drink_name, pick_up) VALUES ('Tequila Sunrise', false);

DROP TABLE drinks;