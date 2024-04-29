const { postSchema } = require("../models");

const getpost = () => {
  return postSchema.find();
};
const addpost = (body) => {
  return postSchema.create(body);
};
const findpost = (email) => {
  return postSchema.findOne({ email: email });
};
const getpostByemail = (email) => {
  return postSchema.findOne({ email });
};
const updatepost = (id, body) => {
  return postSchema.findByIdAndUpdate(id, { $set: body });
};
const deletepost = (id) => {
  return postSchema.findByIdAndDelete(id);
};
module.exports = { addpost, findpost, getpost, getpostByemail, updatepost, deletepost };
