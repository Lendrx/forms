const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'vehicle_orders',
    password: '00data01',
    port: 5432
});

module.exports = pool;
