const db = require("../config/db");



exports.getAllUsers = (callback) => {
  db.query("SELECT * FROM users", callback);
};

exports.getUser = (id,callback) => {
  db.query("SELECT * FROM users where id = ?", [id] ,callback);
};

exports.createUser = (data, callback) => {
  db.query("INSERT INTO users SET ?", data, callback);
};

exports.updateUser = (id, data, callback) => {
  db.query("UPDATE users SET ? WHERE id = ?", [data, id], callback);
};

exports.deleteUser = (id, callback) => {
  db.query("DELETE FROM users WHERE id = ?", [id], callback);
};