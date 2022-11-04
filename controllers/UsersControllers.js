const jsonwebtoken = require("jsonwebtoken");
const {
  assertValidPasswordService,
  assertEmailIsUniqueService,
  assertEmailIsValid,
  createUserService,
  encryptPassword
} = require("../services/authorization.services");

const models = require("../models/index");
const { where } = require("sequelize");



const authLoginController = async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    const userFound = await models.user.findAll({where: {email: email,},
    });;
    if (!userFound) {
      res.status(401).json({ message: "Password or email is incorrect user not found" });
      return;
    }
    const hashedPassword = encryptPassword(password);
    if (hashedPassword !== userFound.password) {
      res.status(401).json({ message: "Password or email is incorrect password not found" });
      return;
    }
  
    const secret = process.env.JWT_SECRET || '';
  
    if (secret.length < 10) {
      throw new Error("JWT_SECRET is not set");
    }
  
    const jwt = jsonwebtoken.sign({
      name: userFound.uuid,
      email: userFound.email,
      rolIdRol: userFound.rolIdRol
    }, secret);
  
    res.status(200).json({
      message: "Login successful",
      jwt: jwt,
    });
  }
  





const authRegisterController = async (req, res) => {
  const body = req.body;
//   Validate that the password is correct and send a message if it is not
  try {
    assertValidPasswordService(body.password);
  } catch (error) {
    console.error(error);
    res.status(400).json({
        message: `Invalid password. Password must be at least 8 characters long, must have at least one lower case letter, must have at least one upper case letter must have at least one number  ${error.message}`,
      });
    return;
  }

  // validate email is correct
  try {
    assertEmailIsValid(body.email);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: `Email is invalid: ${error.message}` });
    return;
  }
//   Validates that email is not already at the system
try {
    assertEmailIsUniqueService(body.email);
} catch (error) {
    console.error(error);
    res.status(400).json({ message: `Email is already at the system:  ${error.message}` });
    return;
}
  // save user
  try {
    const userCreated = await createUserService(body);
    res.status(201).json(userCreated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }




};

module.exports = {
    authRegisterController,
    authLoginController
};
