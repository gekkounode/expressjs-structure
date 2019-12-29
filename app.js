"use strict";

const express = require("express");
const path = require("path");


// Creating the main express app
const app = express();


// Adding a database to the app. Define global models in the model folder in
// the root directory, and add models for individual routers in the individual
// model folders in the routers. To migrate all the databases, run the db.js
// file with node db.js
const db = require("./db");


// Security middleware
const helmet = require("helmet");
app.use(helmet());


// Cookie Session middleware
const cookieSession = require("cookie-session");

app.set("trust proxy", 1);
app.use(cookieSession({
	name: "session",
	keys: ["secretKey1", "secretKey2"],
	cookie: {
		secure: true,
		httpOnly: true,
		//domain: "example.com",
		//path: "foo/bar",
		expires: new Date(Date.now() + 60 * 60 * 1000),
	}
}));


// Logging middleware to log information on the request that was recieved
app.use((req, res, next) => {
	db.Logs.then(d => {
		d.create({
			requestTimestamp: Date.now(),
			baseUrl: req.baseUrl,
			hostname: req.hostname,
			ip: req.ip,
			method: req.method,
			originalUrl: req.originalUrl,
			path: req.path,
			protocol: req.protocol,
			query: JSON.stringify(req.query),
			route: req.route,
			params: JSON.stringify(req.params),
			secure: req.secure,
			subdomains: JSON.stringify(req.subdomains),
			xhr: req.xhr,
		});
	});
	
	next();
});


// Adding all of the routes as well as their static middleware to their
// individual static folders
const myappRouter = require("./routes/myapp/router");
app.use("/api", express.static(path.join(__dirname, "routes/myapp/static")));
app.use("/api", myappRouter);


// Starting the server
app.listen(4000, () => {
	console.log("Express app started at http://127.0.0.1:4000");
});