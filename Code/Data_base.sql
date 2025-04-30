CREATE DATABASE;
USER_ID DISTINCT:(INT);

-- @block 
CREATE DATABASE Yahway_Database;

-- @block
USE Yahway_Base;

-- @block
CREATE TABLE User Infromatiom \ (
    ID INT UNIQUE , 
    Age INT,
    Gender VARCHAR,
    Email VARCHAR(50),
    Phone VARCHAR(50),
    State VARCHAR(50),
    Country VARCHAR(50)
);