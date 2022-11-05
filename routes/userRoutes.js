const express = require('express');
const router = express.Router();
const userEndpoints = require('../endpoints/userEndpoints');
// const { authLoginController, authRegisterController } = require("../controllers/UsersControllers")

router.get('/all', userEndpoints.findAll);
router.post("/login", userEndpoints.login)
router.post("/register", userEndpoints.register)



module.exports = router;

