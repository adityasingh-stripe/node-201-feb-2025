const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const UserService = require("../services/user.service");
const UserServiceInstance = new UserService();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

const myJwtStrategy = new JWTStrategy(options, async ({ userId }, done) => {
  try {
    const user = await UserServiceInstance.findById(userId);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = myJwtStrategy;
