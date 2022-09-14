// utilizamos la dependencia previamente installada
const mongoose = require('mongoose');
// conectamos la url de la base de datos donde se encuentra la informacion
const url = `mongodb+srv://adsi2364481:p8TCW6KTs7OtZPFa@clusteradsi2364481.bnbay.mongodb.net/tienda_virtual?retryWrites=true&w=majority`;

// hacemos la coneccion de la base de datos
const parametros ={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url,parametros)
    .then( ()=>{
        console.log('conexion exitosa');
    })
    .catch((err)=>{
        console.error('no se pudo conectar a la base de datos');
    })

module.exports=mongoose;