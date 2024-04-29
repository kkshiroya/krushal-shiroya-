const express = require("express");
const validate = require("../middlewares/validate");
const { postValidation } = require("../validations");
const { postController } = require("../controllers");

const route = express.Router();
route.get("/get", postController.getpost);
route.post(
  "/register",
  validate(postValidation.addpost),
  postController.addpost
);
route.post("/login", postController.loginpost);
route.delete("/delete/:id", postController.deletepost);
route.put(
  "/update/:id",
  validate(postValidation.addpost),
  postController.updatepost
);

module.exports = route;
