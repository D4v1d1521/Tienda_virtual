const { ObjectId } = require("mongodb");
const mongoose = require("../config/conexion");

const SchemaCliente = new mongoose.Schema({
    cedula:{
        type: Number,
        required: true,
    }, 
    nombre:{
        type: String,
        required: true,
    },
    telefono:{
        type: Number,
        required: true,
    },
    ubicacion:{
        
        longitud:{
            type: String,
        },
        latitud:{
            type: String
        } 
    },
    total_comprado:{
        type: Number,
        required: true,
        default: 0,
    },
    historico_compras:{
        producto:{
            type: String,
            default: "No tiene compras"        

        },
        precio:{
            type: Number,
            default: "No tiene compras"        

        }
    }
});

const Clientes = mongoose.model("clientes", SchemaCliente);

module.exports = Clientes;