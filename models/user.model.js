const { DataTypes } = require('sequelize');
const sequelize = require('../config/db3');

const User = sequelize.define("User",{

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.ENUM('active','inactive'),
        allowNull: false,
        defaultValue: 'active'
    },
    created_at: {
  type: DataTypes.DATE,
  allowNull: false,
  defaultValue: DataTypes.NOW
}
}
,{
    timestamps: false
}
);

module.exports = User;