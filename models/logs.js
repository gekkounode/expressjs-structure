"use strict";

const { DataTypes } = require('sequelize');

const Logs = {
	modelName: "Logs",
	fieldNames: {
		requestTimestamp: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		baseUrl: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		hostname: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		ip: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		method: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		originalUrl: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		path: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		protocol: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		query: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		route: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		params: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		secure: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		subdomains: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		xhr: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	}
};

module.exports = () => [Logs];