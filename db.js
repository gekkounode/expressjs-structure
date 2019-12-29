"use strict";

const fs = require("fs");
const path = require("path");
const globby = require("globby");

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "database.sqlite",
});

let db = {};

// Creating and collecting all of the models in the routers as well as in the
// global model folder for models used by the entire application
let modelPathArray = globby.sync("models/*").concat(globby.sync("routes/**/models/*")); 

modelPathArray.forEach((modelFilePath) => {
	let modelArray = require("./" + modelFilePath)();
	
	modelArray.forEach((model) => {
		if (require.main === module) {
			db[model.modelName] = sequelize.define(model.modelName, model.fieldNames).sync({force: true});
		} else {
			db[model.modelName] = sequelize.define(model.modelName, model.fieldNames).sync();
		}
	});
});

module.exports = db;
