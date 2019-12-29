"use strict";

const { DataTypes } = require("sequelize");

// Create models by creating an object which will be used by sequelize in db.js
const Forum = {
	modelName: "Forum",
	fieldNames: {
		postText: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		postTime: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	}
};

// Register all models in the list in this function
module.exports = () => [Forum];