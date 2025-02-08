const router = require("express").Router();
const {
  getUsers,
  getUserById,
  searchUsers,
} = require("../controllers/users.controller");

router.get("/", getUsers);

router.get("/search", searchUsers);

router.get("/:uuid", getUserById);

// router.post("/", )

// router.get("/:uuid/profile", );

// router.get("/:uuid/settings", );

module.exports = router;
