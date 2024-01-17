const User = require("../models/User");

// @desc      Get all users
// @route     GET /users
// @access    Public
exports.getUsers = async (req, res, next) => {
    const user = await User.find(req.body);

  res.status(200).json({
    success: true,
    data: user
  });
};

// @desc      Get Single User
// @route     GET /users/:id
// @access    Public
exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user,
  });
};

// @desc      Create User
// @route     POST /users
// @access    Public
exports.createUser = async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
};

// @desc      Update User
// @route     PUT /users/:id
// @access    Public
exports.updateUser = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    data: user,
  });
};

// @desc      Delete User
// @route     DELETE /users/:id
// @access    Public
exports.deleteUser = async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
};
