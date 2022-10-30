const express = require('express');
const colors = require('colors');
const app = express();
const PORT =3000;
const models = require("./models/index");
const db = require('./db/db');




app.use(express.json());




app.get("/",(req,res)=>{
    res.send("Funciona")
})

app.listen(PORT, ()=>{
    console.log(`El servidor esta up y alojado en el puerto => ${PORT}`.bgBlue.white);

    db.sync({force:true}).then(()=> {
        console.log("Conectados a la DB")
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
})