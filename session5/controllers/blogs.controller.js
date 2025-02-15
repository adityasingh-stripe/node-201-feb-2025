const Blog = require("../models/blog.model");

const postBlog = async (req, res) => {
  try {
    // const newBlog = await Blog.create(req.body);
    // OR
    const newBlog = new Blog(req.body);
    await newBlog.save();

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
    res.send(await Blog.find());
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong, try again!" });
  }
};

const getBlogById = async (req, res) => res.send(req.resource);

const deleteBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    await Blog.findByIdAndDelete(id); // findOneAndDelete({ _id: id })
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong, try again!" });
  }
};

const updateBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    // findOneAndUpdate({ _id: id }, req.body) // can also be used
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      // returnDocument: "after",
      new: true,
    });
    res.send(updatedBlog);
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
};
