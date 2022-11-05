const express = require('express');
const router = express.Router();
const loansEndpoints = require('../endpoints/loansEndpoints');
const { authBearerMiddleware, isAdmin } = require("../middleware/auth.middleware")



loansEndpoints.newLoan = async(req,res) => {
    const { authorization } = req.headers;
    const [strategy, jwt] = authorization.split(" ");
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);  
    try {
      await models.loans.create({
        date_of_loan: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        userIdUser: payload.id_user,
    }),
    await models.loans.update({})
    } catch (error) {
        
    }
}



module.exports = router;
