const { ObjectId } = require("mongodb");
const mongoose = require("../config/conexion");


const SchemaProducto = new mongoose.Schema({
    referencia:{
        type: String,
        required: true,
    }, 
    nombre:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
        default: "No tiene"
    },
    precio:{
        type: Number,
        default: parseFloat(0),
    },
    stock:{
        type: Number,
        required: true,
        default: 0
    },
    imagen:{
        type: String,
        requireD: true,
        default: "No tiene imagen"        
    },
    estado:{
        type: String,
        required:true,
        default: "habilitado"
    }

})

const productos = mongoose.model("productos",SchemaProducto)

module.exports = productos