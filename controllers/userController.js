const userModel = require("../models/userModel");

exports.getUsers = (req, res) => {
  userModel.getAllUsers((err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
};

exports.getUser = (req, res) => {
  userModel.getUser(req.params.id,(err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
};

exports.addUser = (req, res) => {
  userModel.createUser(req.body, (err, result) => {
    if (err) return res.send(err);
    res.send("User created");
  });
};

exports.updateUser = (req, res) => {
  userModel.updateUser(req.params.id, req.body, (err) => {
    if (err) return res.send(err);
    res.send("User updated");
  });
};

exports.deleteUser = (req, res) => {
  userModel.deleteUser(req.params.id, (err) => {
    if (err) return res.send(err);
    res.send("User deleted");
  });
};