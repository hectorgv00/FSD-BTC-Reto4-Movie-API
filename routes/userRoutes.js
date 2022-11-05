const express = require('express');
const router = express.Router();
const userEndpoints = require('../endpoints/userEndpoints');
const { authBearerMiddleware } = require("../endpoints/userEndpoints")

router.post("/login", userEndpoints.login)
router.post("/register", userEndpoints.register)



module.exports = router;

