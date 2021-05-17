//* Environment variables
require("dotenv").config();

//* Mongoose
const { MONGODBURI } = process.env;
const mongoose = require("mongoose");
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const db = mongoose.connection;

mongoose.connect(MONGODBURI, config);

db.on("open", () => console.log("connected to mongo"))
	.on("close", () => console.log("disconnected to mongo"))
	.on("error", (err) => console.log(err));

module.exports = mongoose
