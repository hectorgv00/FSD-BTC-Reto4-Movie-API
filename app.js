const express = require('express');
const colors = require('colors');
const app = express();
const PORT =3000;
const models = require("./models/index");
const db = require('./db/db');
const { sequelize } = require('./models/index');





app.use(express.json());




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
})