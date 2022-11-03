const colors = require('colors');
const express = require('express');
const app = express();
const db = require('./db/db');
const router = require('./router');
const morgan = require('morgan');
const { sequelize } = require('./models');


const PORT =3000;


app.use(express.json());
app.use(router);
app.use(morgan('dev'));




app.get("/",(req,res)=>{
    res.send("Funciona")
})

app.listen(PORT, ()=>{
    console.log(`El servidor esta up y alojado en el puerto => ${PORT}`.bgGreen.red);

    sequelize.authenticate().then(()=> {
        console.log("Conectados a la DB")
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
});