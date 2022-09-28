const express = require('express');
const app = express();
const PORT = process.env.PORT || 9080;
const path = require('path');
const enrutador = require('./routes/Enrouter');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('views/static/'));

app.use('/', enrutador);


app.listen(PORT, (req,res)=>{
    console.log (`ejecutando el node en el puerto ${PORT}` )
});

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views/'));


