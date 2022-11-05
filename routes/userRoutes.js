const express = require('express');
const router = express.Router();
const userEndpoints = require('../endpoints/userEndpoints');
const { authBearerMiddleware, isAdmin } = require("../middleware/auth.middleware")



router.post("/login", userEndpoints.login)
router.post("/register", userEndpoints.register)
router.get("/all", authBearerMiddleware, isAdmin, userEndpoints.findAll);
router.get('/findcurrentuser',authBearerMiddleware, userEndpoints.findCurrentUser);




module.exports = router;

