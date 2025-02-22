const UserService = require("../services/user.service");
const AuthService = require("../services/auth.service");

const UserServiceInstance = new UserService();
const AuthServiceInstance = new AuthService();

const postSignup = async (req, res) => {
  const hashedPassword = await AuthServiceInstance.generatePasswordHash(
    req.body.password
  );

  try {
    const newUser = await UserServiceInstance.register({
      ...req.body,
      password: hashedPassword,
    });
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong... Try again!" });
  }
};

const postLogin = async (req, res) => {
  const { username, password } = req.body;

  const userInDb = await UserServiceInstance.findByUsername(username);
  if (!userInDb) return res.sendStatus(404);

  const isLoggedIn = await AuthServiceInstance.verifyPassword(
    password,
    userInDb.password
  );

  if (!isLoggedIn) return res.sendStatus(401);

  const token = AuthServiceInstance.generateJwt({ userId: userInDb._id });

  res
    .status(200)
    .cookie("remember_user_token", token, {
      httpOnly: true,
      maxAge: 1 * 60 * 1000,
    })
    .send({ isLoggedIn });
};

module.exports = { postSignup, postLogin };
