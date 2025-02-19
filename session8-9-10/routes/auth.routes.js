const router = require("express").Router();

const { postSignup, postLogin } = require("../controllers/auth.controller");

const { validateSchema } = require("../middlewares/validate.middleware");

const { userValidationSchema } = require("../validations/user.validator");
const { loginValidationSchema } = require("../validations/login.validator");

router.post("/signup", validateSchema(userValidationSchema), postSignup);
router.post("/login", validateSchema(loginValidationSchema), postLogin);

module.exports = router;
