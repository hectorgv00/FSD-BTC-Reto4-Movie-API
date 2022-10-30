const express = require('express');
const colors = require('colors');
const app = express();
const PORT =3000;
const models = require("./models/index");





app.use(express.json());



app.listen(PORT, ()=>{
    console.log(`El servidor esta up y alojado en el puerto => ${PORT}`.bgBlue.white);

    db.sync({force:true}).then(()=> {
        console.log("Conectados a la DB")
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
})