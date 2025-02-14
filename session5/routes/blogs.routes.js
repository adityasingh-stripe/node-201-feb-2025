const router = require("express").Router();
const {
  postBlog,
  getBlogs,
  getBlogById,
  deleteBlogById,
  updateBlogById,
} = require("../controllers/blogs.controller");

router.get("/", getBlogs);
router.post("/new", postBlog);

router
  .route("/:blogId") // clubbing routes together
  .get(getBlogById)
  .delete(deleteBlogById)
  .patch(updateBlogById);

// router.get("/:blogId", getBlogById);
// router.delete("/:blogId", deleteBlogById);
// router.patch("/:blogId", updateBlogById);

module.exports = router;
