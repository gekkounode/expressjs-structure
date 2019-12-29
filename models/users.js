"use strict";

const { DataTypes } = require("sequelize");

// Create models by creating an object which will be used by sequelize in db.js
const Users = {
	modelName: "Users",
	fieldNames: {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}
};

// Register all models in the list in this function
module.exports = () => [Users];