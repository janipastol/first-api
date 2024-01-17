const bcrypt = require("bcrypt");
const User = require("../models/User");

// @desc      Register user
// @route     POST /register
// @access    Public

exports.register = async (req, res, next) => {
  const user = await User.create(req.body);

  user.password = undefined;

  res.status(201).json({
    success: true,
    data: user,
  });
};

// @desc      Login user
// @route     POST /login
// @access    Public

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email & password
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide an email and password",
    });
  }

  // Check if User Exist
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  // Check if password matches
  const isMatched = await user.matchPassword(password);

  if (!isMatched) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const token = await user.getSignedJwtToken();

  res.status(200).json({
    success: true,
    data: user,
    token
  });
};
