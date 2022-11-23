CREATE DATABASE dbacme;

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS patients (
    id uuid PRIMARY KEY,
    name TEXT NOT NULL,
    birth_date DATE NOT NULL,
    gender TEXT NOT NULL,
    cpf TEXT NULL UNIQUE,
    address TEXT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE
);