const passport = require("passport");
const jwtStrategy = require("../config/passport");

passport.use(jwtStrategy);

// const authorize = passport.authenticate("jwt", { session: false });

// module.exports = authorize;

module.exports = passport.authenticate("jwt", { session: false });
