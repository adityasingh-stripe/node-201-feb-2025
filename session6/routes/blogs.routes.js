const router = require("express").Router();
const {
  postBlog,
  getBlogs,
  getBlogById,
  deleteBlogById,
  updateBlogById,
} = require("../controllers/blogs.controller");
const findByIdAndAttach = require("../middlewares/findByIdAndAttach");
const Blog = require("../models/blog.model");

router.get("/", getBlogs);
router.post("/new", postBlog);

router
  .route("/:id") // clubbing routes together
  .all(findByIdAndAttach(Blog)) // the middleware runs on all HTTP methods
  .get(getBlogById)
  .delete(deleteBlogById)
  .patch(updateBlogById);

// router.get("/:blogId", getBlogById);
// router.delete("/:blogId", deleteBlogById);
// router.patch("/:blogId", updateBlogById);

module.exports = router;
