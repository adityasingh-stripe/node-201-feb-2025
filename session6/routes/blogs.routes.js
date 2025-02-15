const router = require("express").Router();
const {
  postBlog,
  getBlogs,
  getBlogById,
  deleteBlogById,
  updateBlogById,
  searchBlogs,
} = require("../controllers/blogs.controller");
const findBlogByIdAndAttach = require("../middlewares/findBlogByIdAndAttach");

router.get("/", getBlogs);
router.post("/new", postBlog);
router.get("/search", searchBlogs);

router
  .route("/:id") // clubbing routes together
  .all(findBlogByIdAndAttach) // the middleware runs on all HTTP methods
  .get(getBlogById)
  .delete(deleteBlogById)
  .patch(updateBlogById);

// router.get("/:blogId", getBlogById);
// router.delete("/:blogId", deleteBlogById);
// router.patch("/:blogId", updateBlogById);

module.exports = router;
