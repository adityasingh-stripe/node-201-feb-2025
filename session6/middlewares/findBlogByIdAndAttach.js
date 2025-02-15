const BlogService = require("../services/blogs.service");
const BlogServiceInstance = new BlogService();

const findBlogByIdAndAttach = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reqBlog = await BlogServiceInstance.findById(id);
    if (!reqBlog) return res.sendStatus(404);
    req.blog = reqBlog;
    next();
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId")
      return res.status(400).send({ message: "Invalid Id!" });
    console.log(error);
    res
      .status(500)
      .send({ message: "Something went wrong... Please try again!" });
  }
};

module.exports = findBlogByIdAndAttach;
