// Create and send token and save in the cookie
const sendToken = (user, statusCode, res) => {
  // create jwt token
  const token = user.getJwtToken();
  // options for cookie
  // console.log("token login", token);
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: "None",
    secure: true,
  };
  res.header("Access-Control-Allow-Origin", "https://frontend-main-v1.vercel.app", "http://localhost:3000");
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message: "Welcome back !!",
    token,
    user,
  });
};

module.exports = sendToken;
