const router = require("express").Router();
const {
  getUsers,
  getUserById,
  searchUsers,
} = require("../controllers/users.controller");
const authorize = require("../middlewares/verifyAuth");
const { userSearchSchema } = require("../validations/users.validation");
const {
  userSearchValidator,
  queryValidator,
} = require("../middlewares/validator");

router.get("/", authorize, getUsers);

// router.get("/search", authorize, userSearchValidator, searchUsers);

router.get("/search", authorize, queryValidator(userSearchSchema), searchUsers);

router.get("/:uuid", getUserById);

// router.post("/", );

// router.get("/:uuid/profile", );

// router.get("/:uuid/settings", );

module.exports = router;
