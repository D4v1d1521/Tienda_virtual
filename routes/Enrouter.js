const express = require('express');
const conex = require('../config/conexion');
const Productos =require('../models/models');
const Clientes = require('../models/modelsClientes');

const router = express.Router();



router.get('/index', (req, res)=>{
    res.render('pages/inicio');
});


router.get('/conex', (req, res)=>{
    console.log(conex);
});

router.get('/listarProductos', (req, res)=>{

    Productos.find({}, (err, productos)=>{
    
        if(err){
            console.error('Ha ocurrido un error',err);
        }else{
            res.render('pages/Productos/listarProductos',{prods: productos});
        }
    });
    
});

router.get('/formProducto', (req, res)=>{
    res.render('pages/Productos/formProducto');
});

router.post('/registrarProducto',(req,res)=>{
    const nuevoProducto = new Productos(
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
    nuevoProducto.save()
        .then(() =>{
            console.log("producto creado");
            res.redirect('/listarProductos');
        })
        .catch((err) =>{
            console.log("no se pudo guardar el json",err)
        })
});

router.get('/editarProducto/:_id',(req, res) => {
    Productos.findOne({_id: req.params._id}, (err, productos) => {
        if(err){
            console.error(err);
        }else{
            res.render('pages/Productos/editarProducto', {datos: productos});
        }
    });
});

router.post('/actualizarProducto/:_id',(req,res)=>{
    Productos.updateOne({_id: req.params._id},
        {
            $set:{
                referencia: req.body.referencia, 
                nombre: req.body.nombre,                
                descripcion: req.body.descripcion, 
                precio: req.body.precio, 
                stock: req.body.stock, 
                imagen: req.body.imagen, 
                estado: req.body.estado,
            }
        }, (err, data) => {
            if(err){
                console.error(err);
                res.redirect('/listarProductos');
            }else{

                res.redirect('/listarProductos');
                // window.open('/listarProductos')
            }
        });
});


router.post('/eliminarProducto/:referencia', (req, res) =>{
    Productos.deleteOne({referencia: req.params.referencia}, (err) =>{
        if(err){
            // res.send('No se pudo eliminar.');
            console.log(err )
        }else{ 
            console.log('Producto eliminado');
            res.redirect('/listarProductos');
        }
    });
});

router.get('/listarClientes', (req, res)=>{

    Clientes.find({}, (err, clientes)=>{
    
        if(err){
            console.error('Ha ocurrido un error',err);
        }else{
            res.render('pages/Clientes/listarClientes',{clients: clientes});
        }
    });
    
});

router.get('/formCliente', (req, res)=>{
    res.render('pages/Clientes/formCliente');
});

router.post('/registrarCliente',(req,res)=>{
    const nuevoCliente = new Productos(
        {
            "cedula": req.body.cedula,
            "nombre": req.body.nombre,
            "telefono": req.body.telefono,
            "ubicacion": req.body.ubicacion,
            "longitud": req.body.longitud,
            "latidud": req.body.latidud,
            "total_comprado": req.body.total_comprado,
            "historico_compras": req.body.historico_compras,
            "producto": req.body.producto,
            "precio": req.body.precio,
            
        }
    )
    nuevoCliente.save()
        .then(() =>{
            console.log("cliente creado");
            res.redirect('/listarClientes');
        })
        .catch((err) =>{
            console.log("no se pudo guardar el json",err)
        })
});

module.exports = router;