const { adminService } = require("../services");


const addadmin = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const adminExist = await adminService.getadminByemail(body.adminEmail);

    if (adminExist) {
      throw new Error("admin already exist");
    }

    const admin = await adminService.addadmin(body);

    if (!admin) {
      throw new Error("something went wrong");
    }

    res.status(201).json({
      message: "admin Created success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const loginadmin = async (req, res) => {
  const body = req.body;
  console.log(body);
  const adminEmail = req.body.adminEmail;
  const password = req.body.password;

  const findadmin = await adminService.findadmin(adminEmail);
  
  console.log(findadmin);

  if (!findadmin) {
    res.status(500).json({
      message: "admin not found",
    });
  } else {
    if (password === findadmin.password) {
      res.status(200).json({
        message: "login success",
        data: findadmin,
      });
    } else {
      res.status(500).json({
        message: "Enter valid password",
      });
    }
  }
};

const getadmin = async (req, res) => {
  const admin = await adminService.getadmin();

  console.log(admin, "get");

  res.status(200).json({
    message: "user get success",
    data: admin,
  });
};

const updateadmin = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);
    const admin = await adminService.updateadmin(id, body);

    res.status(200).json({
      message: "admin updated success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const deleteadmin = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const admin = await adminService.deleteadmin(id);
    if (!admin) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "admin delete success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = { addadmin, loginadmin, getadmin, updateadmin, deleteadmin };
