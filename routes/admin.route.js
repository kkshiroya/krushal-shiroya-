const express = require("express");
const validate = require("../middlewares/validate");
const { adminValidation } = require("../validations");
const { adminController } = require("../controllers");

const route = express.Router();
route.get("/get", adminController.getadmin);
route.post(
  "/register",
  validate(adminValidation.addadmin),
  adminController.addadmin
);
route.post("/login", adminController.loginadmin);
route.delete("/delete/:id", adminController.deleteadmin);
route.put(
  "/update/:id",
  validate(adminValidation.addadmin),
  adminController.updateadmin
);

module.exports = route;
