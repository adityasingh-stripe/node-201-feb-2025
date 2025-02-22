const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

class AuthService {
  generatePasswordHash = (plainTextPassword) =>
    bcrypt.hash(plainTextPassword, 10);

  verifyPassword = (plainTextPassword, hashedPassword) =>
    bcrypt.compare(plainTextPassword, hashedPassword);

  generateJwt = (payload) =>
    Jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1m" });

  verifyJwt = (token) => Jwt.verify(token, process.env.JWT_SECRET_KEY);
}

module.exports = AuthService;
