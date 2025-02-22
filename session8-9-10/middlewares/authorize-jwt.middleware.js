const UserService = require("../services/user.service");
const AuthService = require("../services/auth.service");

const UserServiceInstance = new UserService();
const AuthServiceInstance = new AuthService();

const authorize = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(403);

  try {
    const { userId } = AuthServiceInstance.verifyJwt(token);
    const reqUser = await UserServiceInstance.findById(userId);
    req.user = reqUser;

    next();
  } catch (error) {
    console.log(error);
    res.status(403).send({ error });
  }
};

module.exports = authorize;
