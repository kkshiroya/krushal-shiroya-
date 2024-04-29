const express = require("express");
const userRoute = require("./user.route");
const adminRoute = require("./admin.route");
const postRoute = require("./post.route");

const route = express.Router();

route.use("/user", userRoute);
route.use("/admin", adminRoute);
route.use("/post", postRoute);



module.exports = route;
