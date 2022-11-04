const express = require('express');
const router = express.Router();
const userEndpoints = require('../endpoints/userEndpoints');
const { authLoginController, authRegisterController } = require("../controllers/UsersControllers")

router.get('/all', userEndpoints.findAll);
router.post("/login", authLoginController)
router.post("/register", authRegisterController)



module.exports = router;

