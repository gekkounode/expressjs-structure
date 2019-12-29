const express = require("express");
const path = require("path");


// Database Access
const db = require("../../db");


// Rendering Engine
const nunjucks = require("nunjucks");
nunjucks.configure(path.join(__dirname, "templates"), {autoescape: true});


// Router variable
const router = express.Router();

router.get("/", (req, res) => {
	res.send(nunjucks.render("index.html", {foo: "bar"}));
});

router.get("/:yourNumber", (req, res) => {
	if (req.session.views <= 0)
		req.session.views = 0;
	req.session.views++;
	
	res.send(`Your user id is: ${req.params.yourNumber}, saving this in the database; You visited this pages this many times: ${req.session.views}`);
	
	db.Users.then(d => d.create({username: String(req.params.yourNumber), password: "hello-world!"}));
});


// Exports the router for use in app.js
module.exports = router;