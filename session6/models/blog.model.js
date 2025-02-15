const mongoose = require("mongoose");
const validator = require("validator");

const authorSchema = new mongoose.Schema(
  {
    fullName: { type: String, default: "" },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value) =>
          validator.isEmail(value, {
            host_blacklist: ["gmail.com", "yahoo.com"],
          }),
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    twitterHandle: { type: String, default: "" },
    image: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
      validate: {
        validator: (value) => validator.isURL(value, { protocols: ["https"] }),
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
    // age: {
    //   type: Number,
    //   min: [15, "Oops! You must be at least 15 to write!"],
    //   max: [99, "Oops! You must have seen world wars"],
    // }, // built in validator
    // gender: { type: String, enum: ["male", "female"]} // built in validator
  },
  {
    _id: false,
  }
);

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true }, //Title is string
    authors: { type: [authorSchema] }, //Authors is an array of strings
    content: { type: String, default: "" }, //Content is string
    publishedAt: { type: Date, default: null }, //publishedAt is Date
  },
  {
    timestamps: true,
    // _id: false, // MongooseError: Not allowed here as blog is a document and document must have an _id
  }
);

const blogModel = mongoose.model("Blog", blogSchema); // if the name of the collection is not defined, it will default to plural form of model name

module.exports = blogModel;
