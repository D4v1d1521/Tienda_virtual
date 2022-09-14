const express = require('express');
const conex = require('../config/conexion');
let mongoose = require('../config/conexion');
const productos =require('../models/models');
const router = express.Router();



router.get('/index', (req, res)=>{
    res.render('pages/index');
})
router.post('/registrar',(req,res)=>{
    const nuevoProducto = new productos(
        {
            "referencia": req.body.referencia,
            "nombre": req.body.nombre,
            "descripcion": req.body.descripcion,
            "precio": req.body.precio,
            "stock": req.body.stock,
            "estado": req.body.estado,
            "imagen": req.body.imagen
            
        }
    )
    nuevoProducto.save();
    console.log(nuevoProducto)
});

router.get('/conex', (req, res)=>{
    console.log(conex);
})

module.exports = router;