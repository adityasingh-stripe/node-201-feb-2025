const BlogService = require("../services/blogs.service");
const BlogServiceInstance = new BlogService();

const postBlog = async (req, res) => {
  try {
    const newBlog = BlogServiceInstance.create(req.body);
    await BlogServiceInstance.save(newBlog);

    res.status(201).send(newBlog);
  } catch (error) {
    if (error.code === 11000)
      return res
        .status(409)
        .send({ message: "A blog with this title already exists!" });
    if (error.name === "ValidationError")
      return res.status(400).send({ message: error.message });
    console.log(error);
    res.status(500).send({ message: "Something went wrong, try again!" });
  }
};

const getBlogs = async (req, res) => {
  try {
    res.send(await BlogServiceInstance.findAll());
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong, try again!" });
  }
};

const getBlogById = async (req, res) => res.send(req.blog);

const deleteBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    await BlogServiceInstance.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong, try again!" });
  }
};

const updateBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBlog = await BlogServiceInstance.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.send(updatedBlog);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong, try again!" });
  }
};

const searchBlogs = async (req, res) => {
  const { title, author } = req.query;
  try {
    const result = await BlogServiceInstance.search(title, author);
    if (!result)
      return res
        .status(400)
        .send({ message: "At least one of 'title' or 'author' is required!" });
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong, try again!" });
  }
};

module.exports = {
  postBlog,
  getBlogs,
  getBlogById,
  deleteBlogById,
  updateBlogById,
  searchBlogs,
};
