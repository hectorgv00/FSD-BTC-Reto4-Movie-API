
const { Op } = require("sequelize");
const models = require("../models/index");
const userEndpoints = {};

userEndpoints.findAll = async (req,res) => {
    try{
        const users = await models.user.findAll();
        return res.status(200).json(users);
    }catch(error){
        res.send(error);
    }
}

// userEndpoints.register = async (req,res) =>{
// try {
//     let userBody = req.body
//     let resp = await models.user.create({
//         id_user:23,
//         email:userBody.email,
//         name:userBody.name,
//         surname:userBody.surname,
//         password:userBody.password,
//         document:userBody.document,
//         address:userBody.address,
//     })
//     res.send(resp);
// } catch (error) {
//     res.send(error)
// }
// }

module.exports = userEndpoints;