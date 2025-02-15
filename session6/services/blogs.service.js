const Blog = require("../models/blog.model");

class BlogService {
  create = (payload) => new Blog(payload);

  save = (newBlog) => newBlog.save();

  findAll = () => Blog.find();

  findById = (blogId) => Blog.findById(blogId);

  findByIdAndDelete = (blogId) => Blog.findByIdAndDelete(blogId);

  findByIdAndUpdate = (blogId, payload) =>
    Blog.findByIdAndUpdate(blogId, payload, { new: true });

  search = (title, author) => {
    const titleRegex = new RegExp(title);
    const titleQuery = { title: titleRegex };
    const authorQuery = { authors: { $elemMatch: { email: author } } };

    if (title && author) return Blog.find({ $and: [titleQuery, authorQuery] });
    if (title) return Blog.find(titleQuery);
    if (author) return Blog.find(authorQuery);
    return null;
  };
}

// res.send(await Blog.find({ title: titleRegex }));
// OR
// res.send(await Blog.find({ title: { $regex: titleRegex } }));
// OR
// res.send(await Blog.find({ title: { $regex: titleRegex, $options: "i" } }));

module.exports = BlogService;
