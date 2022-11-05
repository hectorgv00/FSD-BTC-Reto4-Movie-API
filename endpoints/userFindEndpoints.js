const { Op } = require("sequelize");
const models = require("../models/index");
const userFindEndpoints = {};
const jsonwebtoken = require("jsonwebtoken");

userFindEndpoints.findAll = async (req, res) => {
    try {
        const users = await models.user.findAll();
        return res.status(200).json(users);
      } catch (error) {
        res.send(error);
      }
};

userFindEndpoints.findCurrentUser = async (req,res) =>{
    const { authorization } = req.headers;
    const [strategy, jwt] = authorization.split(" ");
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    try {
        let  id  = payload.id_user;
        console.log(`${id}`.bgCyan);
        let resp = await models.user.findAll({
          where: {
            id_user: id,
          },
        });
        res.send(resp);
      } catch (error) {
        res.send(error);
      }
}

module.exports = userFindEndpoints;
