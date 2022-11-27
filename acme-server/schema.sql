CREATE DATABASE dbacme;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS patients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    birth_date TEXT NOT NULL,
    gender TEXT NOT NULL,
    cpf TEXT NULL UNIQUE,
    zip_code TEXT DEFAULT NULL,
	address_line TEXT DEFAULT NULL,
	district TEXT DEFAULT NULL,
 	address_number TEXT DEFAULT NULL,
	city TEXT DEFAULT NULL, 
  	state TEXT DEFAULT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE
);