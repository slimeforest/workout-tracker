const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
	useNewUrlParser: true,
});

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});