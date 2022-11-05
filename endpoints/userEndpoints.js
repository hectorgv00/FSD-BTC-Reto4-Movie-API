const { Op } = require("sequelize");
const models = require("../models/index");
const userEndpoints = {};
const jsonwebtoken = require("jsonwebtoken");
const {
  assertValidPasswordService,
  assertEmailIsValid,
  encryptPassword,
} = require("../services/authorization.services");


// Registro de usuario

userEndpoints.register = async (req, res) => {
  try {
    let userBody = req.body;
    let password = userBody.password;
    let email = userBody.email;
// Validamos que la contraseña tenga el formato deseado
    try {
      assertValidPasswordService(password);
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: `Invalid password. Password must be at least 8 characters long, must have at least one lower case letter, must have at least one upper case letter must have at least one number  ${error.message}`,
      });
      return;
    }
// Validamos que el email tenga el formato deseado
    try {
        assertEmailIsValid(email);
      } catch (error) {
        console.error(error);
        res.status(400).json({ message: `Email is invalid: ${error.message}` });
        return;
      }    
      
      const hash = encryptPassword(password);
      
      await models.user.create({
      email: userBody.email,
      name: userBody.name,
      surname: userBody.surname,
      password: hash,
      document: userBody.document,
      address: userBody.address,
    });
    res.send(`El usuario con el email ${email} ha sido creado satisfactoriamente`)
} catch (error) {
    res.send(error);
  }
};

// -----------------------------------------------------------------------------------

// Login de usuario

userEndpoints.login = async (req, res) => {
    let userBody = req.body;
    let password = userBody.password;
    let email = userBody.email;
    const userFound = await models.user.findOne({where: {email: email,}
    });
    if (!userFound) {
      res.status(401).json({ message: "Password or email is incorrect" });
      return;
    }
    const hashedPassword = encryptPassword(password);
    if (hashedPassword !== userFound.password) {
      res.status(401).json({ message: "Password or email is incorrect" });
      return;
    }
    const secret = process.env.JWT_SECRET || '';
  
    if (secret.length < 10) {
      throw new Error("JWT_SECRET is not set");
    }
  
    const jwt = jsonwebtoken.sign({
      id_user: userFound.id_user,
      email: userFound.email,
      rolIdRol: userFound.rolIdRol
    }, secret);
  
    res.status(200).json({
      message: "Login successful",
      jwt: jwt,
    });
}

// -------------------------------------------------------------------------------------

// Traer datos de perfil de usuario

userEndpoints.findUser = async (req,res) => {
  try {
    const users = await models.user.findAll();
    return res.status(200).json(users);
  } catch (error) {
    res.send(error);
  }
}


module.exports = userEndpoints;
