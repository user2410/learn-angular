const express   = require('express');
const router    = express.Router();
const db        = require('../modules/db');

router.get('/', async (req, res)=>{
    Promise.all([
        db.query('SELECT * FROM book ORDER BY View_time DESC'),
        db.query('SELECT * FROM book ORDER BY Like_time DESC')
    ]).then((result)=>{
        res.json(result);
    }).catch((err)=>{
        req.json(err);
    });
});

module.exports = router;