const express = require('express');
const router = express.Router();
const userFindEndpoints = require('../endpoints/userFindEndpoints');
const { isAdmin } = require("../middleware/auth.middleware")


// router.get("/:id",  userFindEndpoints.findUser)
router.get('/all', isAdmin, userFindEndpoints.findAll);
router.get('/findcurrentuser', userFindEndpoints.findCurrentUser);



module.exports = router;