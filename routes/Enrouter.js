const express = require('express');
const conex = require('../config/conexion');
const router = express.Router();


router.get('/index', (req, res)=>{
    res.render('../views/index');
})

router.get('/conex', (req, res)=>{
    console.log(conex);
})

module.exports = router;