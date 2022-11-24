const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'http://localhost:3000',
        user: 'postgres',
        password: 123456,
        database: 'dbacme'
    }
});

module.exports = knex;