const express = require('express');
const router = express.Router();
const pool = require('../config/db'); // Der Pfad zu db.js

router.post('/', async (req, res) => {
    try {
        const {
            brand,
            orderdate,
            salesperson,
            grossamount,
            upe,
            vehicletype,
            fin,
            location
        } = req.body;

        const newOrder = await pool.query(
            `INSERT INTO orders 
            (brand, orderdate, salesperson, grossamount, upe, vehicletype, fin, location) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
            [brand, orderdate, salesperson, grossamount, upe, vehicletype, fin, location]
        );

        res.json(newOrder.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
