const db2 = require("../config/db2");

exports.getAllContacts = async () => {
    const [rows] = await db2.query("SELECT * FROM users");
    return rows;
}

exports.getContactById = async (id) => {
    const [rows] = await db2.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
}

exports.createContact = async (contact) => {
    const { name, email, status } = contact;
    const [result] = await db2.query("INSERT INTO users (name, email, status) VALUES (?, ?, ?)", [name, email, status]);
    return { id: result.insertId, ...contact };
}

exports.updateContact = async (id, contact) => {
    const { name, email, status } = contact;
    await db2.query("UPDATE users SET name = ?, email = ?, status = ? WHERE id = ?", [name, email, status, id]);
    return { id, ...contact };
}

exports.deleteContact = async (id) => {
    await db2.query("DELETE FROM users WHERE id = ?", [id]);
}   