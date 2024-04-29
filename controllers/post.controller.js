const { postService } = require("../services");

//ADD or REGISTER

const addpost = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const postExist = await postService.getpostByemail(body.email);

    if (postExist) {
      throw new Error("post already exist");
    }

    const post = await postService.addpost(body);

    if (!post) {
      throw new Error("something went wrong");
    }

    res.status(201).json({
      message: "post Created success",
      data: post,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//LOG-IN
const loginpost = async (req, res) => {
  const body = req.body;
  console.log(body);
  const email = req.body.email;
  const password = req.body.password;

  const findpost = await postService.findpost(email);

  console.log(findpost);

  if (!findpost) {
    res.status(500).json({
      message: "post not found",
    });
  } else {
    if (password === findpost.password) {
      res.status(200).json({
        message: "login success",
        data: findpost,
      });
    } else {
      res.status(500).json({
        message: "invalid password",
      });
    }
  }
};

//GET
const getpost = async (req, res) => {
  const post = await postService.getpost();

  console.log(post, "get");

  res.status(200).json({
    message: "post get success",
    data: post,
  });
};

//UPDATE
const updatepost = async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
      console.log(id, body);

      // const postExist = await postService.getpostByemail(body.email);
      // if (postExist) {
      //   throw new Error("post already exist");
      // }
      // const post = await postService.updatepost(id, body);
      // if (!post) {
      //   throw new Error("something went wrong");
      // }
      const post = await postService.updatepost(id, body);

      res.status(200).json({
        message: "post updated success",
        data: post,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };
  
  

//DELETE
const deletepost = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const post = await postService.deletepost(id);
    if (!post) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "post delete success",
      data: post,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = { addpost, loginpost, getpost, updatepost, deletepost };
