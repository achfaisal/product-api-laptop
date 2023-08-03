const jwt = require("jsonwebtoken");
const { userNew } = require("../models");

const verifyToken = async (req, res, next) => {
  try {
    const jwtToken = req.headers("authorization");

    if (!jwtToken) {
      return res.status(400).send({
        message: "no token provided",
      });
    }

    next();
  } catch (error) {
    return res.send({
      message: "error",
      data: error,
    });
  }
};

module.exports = { verifyToken };
