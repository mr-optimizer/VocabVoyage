const express = require("express");
const router = express.Router();
const {} = require("../controllers/user");

// router.route("/register").post(registerUser);
// router.route("/create-room/:user_id").get()

router.route("/test").get(async (req, res) => {
  res.status(200).json({
    success: true,
    message:
      "Welcome to the API, this is test route, Server running successfully !!",
  });
});
module.exports = router;
